// Your code goes here!
import * as percentage from "./percentage.js"

const modulo1 = document.getElementById("modulo_1")
const modulo2 = document.getElementById("modulo_2")

const percentage1 = document.getElementById("percentage_1")
const percentage2 = document.getElementById("percentage_2")

const percentageOf_1 = document.getElementById("percentageOf_1")
const percentageOf_2 = document.getElementById("percentageOf_2")

const difference_1 = document.getElementById("difference_1")
const difference_2 = document.getElementById("difference_2")



document.addEventListener("keyup", () => {
    let moduloResult = document.getElementById("modulo_result")
    moduloResult.value = percentage.modulo(modulo1.value, modulo2.value)

    let percentageResult = document.getElementById("percentage_result")
    percentageResult.value = percentage.percentage(percentage1.value, percentage2.value)

    let percentageOfResult = document.getElementById("percentageOf_result")
    percentageOfResult.value = percentage.percentageOf(percentageOf_1.value, percentageOf_2.value)
 
    let differenceResult = document.getElementById("difference_result")
    differenceResult.value = percentage.difference(difference_1.value, difference_2.value)

})


import {calculateAspectRatio} from "./aspect-ratio.js"

const ratio_1 = document.getElementById("ratio_1")
const ratio_2 = document.getElementById("ratio_2")
let ratioResultWidth = document.getElementById("ratio_result-width")
let ratioResultHeight = document.getElementById("ratio_result-height")
ratioResultWidth.addEventListener("keyup", () => {
    ratioResultHeight.value = calculateAspectRatio(ratio_1.value, ratio_2.value, ratioResultWidth.value)

})

ratioResultHeight.addEventListener("keyup", () => {
    ratioResultWidth.value = calculateAspectRatio(ratio_1.value, ratio_2.value, ratioResultHeight.value)

})


