package com.kalemz.the_shopper.auth;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegistrationRequest {

    @NotEmpty(message = "Firstname is empty!")
    @NotBlank(message = "Firstname is empty!")
    private String firstname;
    @NotEmpty(message = "Lastname is empty!")
    @NotBlank(message = "Lastname is empty!")
    private String lastname;
    @NotEmpty(message = "Email is empty!")
    @NotBlank(message = "Email is empty!")
    @Email(message = "Wrong format email")
    private String email;
    @NotEmpty(message = "Password is empty!")
    @NotBlank(message = "Password is empty!")
    @Size(min = 8, message = "Min. password length is 8 char.")
    private String password;

}
