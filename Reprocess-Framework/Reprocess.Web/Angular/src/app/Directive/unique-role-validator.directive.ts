import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RoleService } from '../Service/role.service';
import { Result } from '../shared/result';

@Directive({
  selector: '[uniqueRole]',
  providers:[{provide:NG_ASYNC_VALIDATORS, useExisting: UniqueRoleValidatorDirective, multi :true}]
})
export class UniqueRoleValidatorDirective
 {
  result:Result;
  constructor( private roleService : RoleService) {

   }
   validate(control: AbstractControl): Promise<ValidationErrors > | Observable<ValidationErrors > {
     console.log("validate");

    console.log(control.value);

    return this.roleService.checkRoleNameExist(control.value).toPromise()
    .then(res=>{

      console.log(this.result )

    }).then(res=>{
      return this.result.IsSuccess ? {'uniqueRolez' : true} : {'uniqueRolez' : false};

    });
   }

}
