import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function maxWordsValidator(words: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value != null) {
            let wordsCount = (control.value as string).split(" ").length;
            
            if (wordsCount >= words || control.value.length === 0) {
                return null;
            }
            else {
                return {
                    'validateWordsError': {
                        currentWords: wordsCount
                    }
                }
            }
        }
        else{
            return null;
        }
    }
}