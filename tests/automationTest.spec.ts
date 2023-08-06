import {test, expect} from '@playwright/test'
import { Register } from '../testLogic/UI/Register'
import { WebPage } from '../testLogic/_framework/WebPage'

test("Demo Automation -> Register to Demo site", async function() {
    await WebPage.createBrowser()
    await WebPage.goTo()
    await Register.submitRegistration()
})