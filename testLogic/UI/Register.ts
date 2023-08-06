import { WebPage } from "../_framework/WebPage";
import {pO_Register} from '../../resources/pageObject/Register.json';
import { Utility } from "../_framework/Utility";

export class Register extends WebPage{
    static async submitRegistration(){
        await this.type(pO_Register.txtFirstName, 'FName')
        await this.type(pO_Register.txtLastName, 'LName')
        await this.type(pO_Register.txtAddress, "Street 1Q")
        await this.type(pO_Register.txtEmail, "demoSite@mailinator.com")
        await this.type(pO_Register.txtPhone, "9848022338")
        await this.click(pO_Register.chkbxGender_byValue.replace("<Gender>", "Male"))
        await this.click(pO_Register.chkbxHobby_byName.replace("<Hobby>", "Cricket"))

        await this.click(pO_Register.drpdwnLanguage)
        await this.click(pO_Register.optnLanguage_byText.replace("<Language>", "English"))

        const password = (await Utility.generateRandomName()).toString()
        await this.type(pO_Register.txtPassword, password)
        await this.type(pO_Register.txtConfirmPassword, password)

        await this.click(pO_Register.btnSubmit)
    }
}
