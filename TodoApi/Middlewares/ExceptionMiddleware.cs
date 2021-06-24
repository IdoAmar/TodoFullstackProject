using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using ServiceStack.Host;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace TodoApi.Middlewares
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext, IWebHostEnvironment env)
        {
            try
            {
                await _next(httpContext);
            }
            catch (HttpException e)
            {
                var result = new ObjectResult(e.StatusDescription) { StatusCode = e.StatusCode };
                await result.ExecuteResultAsync(new Microsoft.AspNetCore.Mvc.ActionContext
                {
                    HttpContext = httpContext
                });
            }
            catch(Exception e)
            {
                if (env.IsDevelopment())
                {
                    //create object result with error message source stack trace
                    //and status code for development
                    var result = new ObjectResult(new { 
                        //prettify error message
                        ErrorMessage = e.Message.Split("\r\n").Select(t => t.TrimStart()),
                        ErrorSource = e.Source, 
                        //prettify stack trace
                        StackTrace = e.StackTrace?.Split("\r\n").Select(t => t.TrimStart()) })
                        //add status code
                        { StatusCode = 500 };
                    await result.ExecuteResultAsync(new Microsoft.AspNetCore.Mvc.ActionContext
                    {
                        HttpContext = httpContext
                    });
                }
                else
                {
                    var result = new ObjectResult("Internal server error") { StatusCode = 500 };
                    await result.ExecuteResultAsync(new Microsoft.AspNetCore.Mvc.ActionContext
                    {
                        HttpContext = httpContext
                    });
                }
            }
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class ExceptionMiddlewareExtensions
    {
        public static IApplicationBuilder UseExceptionMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ExceptionMiddleware>();
        }
    }
}
