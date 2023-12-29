# Module 5 Challenge: Password Generator

## Overview

This challenge is to write a JavaScript program that prompts a user to a web page to input parameters and then generates a pseudorandom string using those parameters, which is displayed on the screen.

The parameters are length of password and the types of character used for generation of the password.

There are constraints on the parameters, against which they must be validated before generating output.

The length must be between 8 and 128 characters inclusive. The character types are: digits, lower case letters, upper case letters and 'special characters'. A list of special characters from the OWASP foundation is referenced. Starter code includes four arrays containing the sets of allowable characters.

## Installation

As a web application this does not require installation, it is online at github pages with the URL 

## Instructions

The following image shows the web application's appearance:

![password generator demo](./assets/05-javascript-challenge-demo.png)

When the Generate Password button is clicked, a series of prompts are displayed to the user, starting with password length and then selecting the classes of characters to include.

If the length is invalid, an alert is shown and the user returned to the start of the process.

If no character set is selected, an alert is shown and the user returned to the start of the process.

On successful input the password is displayed in place of the Your Password placeholder.

After a time period, the display is cleared automatically and returns to the placeholder.

## Critique

This password generator is *not* intended of fit for actual use. While it does produce pseudorandom passwords of a quality higher than many which people actually use, it is flawed in several ways. The pseudorandom generation method is not of a cryptographic standard and could probably be reverse engineered given sufficient examples of the passwords produced. Also if the code isn't secured on the server, reverse engineering or outright interference with the generator could be trivial. And there's local storage as well.

From the user perspective the 'special character' set includes some which could be difficult for general users to find on the keyboard as they are not much used outside programming. Also users generally don't like the non-memorable nature of pseudorandom strings, so this isn't a friendly type of password for them. If they are already using a password manager to manage complex passwords, then that should be generating really good passwords for them anyway...

And yet again; https://xkcd.com/936/

## Learning points and future development

I won't be implementing password generators; I'll leave that to teams of experts!

I have gained more experience in JavaScript array handling, flow control and the wonders of testing for the NaN value. Despite the name, it's a number, apparently. So needs to be tested with its own isNaN() function. To quote MDN "Note that you cannot test for equality with NaN using either the == or === operators, because unlike all other value comparisons in JavaScript, these evaluate to false whenever one operand is NaN, even if the other operand is also NaN." Digging further, it derives from how NaN is implemented in CPUs, as a signal that something went wrong...

There are residual slight bugs which I think are flow control problems, none showstoppers.

I also now really dislike the restrictions of JavaScript prompts, alerts and confirms. The select the character set(s) stage in particular would be much easier with tick boxes... it is one decision with multiple options, not a series of independent options. I look forward to learning more about better methods soon.

