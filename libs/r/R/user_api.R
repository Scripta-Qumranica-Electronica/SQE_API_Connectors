# SQE API
#
# No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
#
# The version of the OpenAPI document: v1
# 
# Generated by: https://openapi-generator.tech

#' @docType class
#' @title User operations
#' @description qumranicaApiConnector.User
#' @format An \code{R6Class} generator object
#' @field apiClient Handles the client-server communication.
#'
#' @section Methods:
#' \describe{
#' \strong{ V1UsersChangeForgottenPasswordPost } \emph{ Uses the secret token from /users/forgot-password to validate a reset of the user&#39;s password }
#' 
#'
#' \itemize{
#' \item \emph{ @param } reset.forgotten.user.password.request.dto \link{ResetForgottenUserPasswordRequestDTO}
#'
#'
#' \item status code : 200 | Success
#'
#'
#' \item response headers :
#'
#' \tabular{ll}{
#' }
#' }
#'
#' \strong{ V1UsersChangePasswordPost } \emph{ Changes the password for the currently logged in user }
#' 
#'
#' \itemize{
#' \item \emph{ @param } reset.logged.in.user.password.request.dto \link{ResetLoggedInUserPasswordRequestDTO}
#'
#'
#' \item status code : 200 | Success
#'
#'
#' \item response headers :
#'
#' \tabular{ll}{
#' }
#' }
#'
#' \strong{ V1UsersChangeUnactivatedEmailPost } \emph{ Allows a user who has not yet activated their account to change their email address. This will not work if the user  account associated with the email address has already been activated }
#' 
#'
#' \itemize{
#' \item \emph{ @param } unactivated.email.update.request.dto \link{UnactivatedEmailUpdateRequestDTO}
#'
#'
#' \item status code : 200 | Success
#'
#'
#' \item response headers :
#'
#' \tabular{ll}{
#' }
#' }
#'
#' \strong{ V1UsersConfirmRegistrationPost } \emph{ Confirms registration of new user account. }
#' 
#'
#' \itemize{
#' \item \emph{ @param } account.activation.request.dto \link{AccountActivationRequestDTO}
#'
#'
#' \item status code : 200 | Success
#'
#'
#' \item response headers :
#'
#' \tabular{ll}{
#' }
#' }
#'
#' \strong{ V1UsersForgotPasswordPost } \emph{ Sends a secret token to the user&#39;s email to allow password reset. }
#' 
#'
#' \itemize{
#' \item \emph{ @param } reset.user.password.request.dto \link{ResetUserPasswordRequestDTO}
#'
#'
#' \item status code : 200 | Success
#'
#'
#' \item response headers :
#'
#' \tabular{ll}{
#' }
#' }
#'
#' \strong{ V1UsersGet } \emph{ Provides the user details for a user with valid JWT in the Authorize header }
#' 
#'
#' \itemize{
#' \item \emph{ @returnType } \link{UserDTO} \cr
#'
#'
#' \item status code : 200 | Success
#'
#' \item return type : UserDTO 
#' \item response headers :
#'
#' \tabular{ll}{
#' }
#' }
#'
#' \strong{ V1UsersLoginPost } \emph{ Provides a JWT bearer token for valid email and password }
#' 
#'
#' \itemize{
#' \item \emph{ @param } login.request.dto \link{LoginRequestDTO}
#' \item \emph{ @returnType } \link{DetailedUserTokenDTO} \cr
#'
#'
#' \item status code : 200 | Success
#'
#' \item return type : DetailedUserTokenDTO 
#' \item response headers :
#'
#' \tabular{ll}{
#' }
#' }
#'
#' \strong{ V1UsersPost } \emph{ Creates a new user with the submitted data. }
#' 
#'
#' \itemize{
#' \item \emph{ @param } new.user.request.dto \link{NewUserRequestDTO}
#' \item \emph{ @returnType } \link{UserDTO} \cr
#'
#'
#' \item status code : 200 | Success
#'
#' \item return type : UserDTO 
#' \item response headers :
#'
#' \tabular{ll}{
#' }
#' }
#'
#' \strong{ V1UsersPut } \emph{ Updates a user&#39;s registration details.  Note that the if the email address has changed, the account will be set to  inactive until the account is activated with the secret token. }
#' 
#'
#' \itemize{
#' \item \emph{ @param } user.update.request.dto \link{UserUpdateRequestDTO}
#' \item \emph{ @returnType } \link{DetailedUserDTO} \cr
#'
#'
#' \item status code : 200 | Success
#'
#' \item return type : DetailedUserDTO 
#' \item response headers :
#'
#' \tabular{ll}{
#' }
#' }
#'
#' \strong{ V1UsersResendActivationEmailPost } \emph{ Sends a new activation email for the user&#39;s account. This will not work if the user account associated with the  email address has already been activated. }
#' 
#'
#' \itemize{
#' \item \emph{ @param } resend.user.account.activation.request.dto \link{ResendUserAccountActivationRequestDTO}
#'
#'
#' \item status code : 200 | Success
#'
#'
#' \item response headers :
#'
#' \tabular{ll}{
#' }
#' }
#'
#' }
#'
#'
#' @examples
#' \dontrun{
#' ####################  V1UsersChangeForgottenPasswordPost  ####################
#'
#' library(qumranicaApiConnector)
#' var.reset.forgotten.user.password.request.dto <- ResetForgottenUserPasswordRequestDTO$new() # ResetForgottenUserPasswordRequestDTO | A JSON object with the secret token and the new password
#'
#' #Uses the secret token from /users/forgot-password to validate a reset of the user's password
#' api.instance <- UserApi$new()
#'
#' #Configure API key authorization: Bearer
#' api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
#'
#' result <- api.instance$V1UsersChangeForgottenPasswordPost(reset.forgotten.user.password.request.dto=var.reset.forgotten.user.password.request.dto)
#'
#'
#' ####################  V1UsersChangePasswordPost  ####################
#'
#' library(qumranicaApiConnector)
#' var.reset.logged.in.user.password.request.dto <- ResetLoggedInUserPasswordRequestDTO$new() # ResetLoggedInUserPasswordRequestDTO | A JSON object with the old password and the new password
#'
#' #Changes the password for the currently logged in user
#' api.instance <- UserApi$new()
#'
#' #Configure API key authorization: Bearer
#' api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
#'
#' result <- api.instance$V1UsersChangePasswordPost(reset.logged.in.user.password.request.dto=var.reset.logged.in.user.password.request.dto)
#'
#'
#' ####################  V1UsersChangeUnactivatedEmailPost  ####################
#'
#' library(qumranicaApiConnector)
#' var.unactivated.email.update.request.dto <- UnactivatedEmailUpdateRequestDTO$new() # UnactivatedEmailUpdateRequestDTO | JSON object with the current email address and the new desired email address
#'
#' #Allows a user who has not yet activated their account to change their email address. This will not work if the user  account associated with the email address has already been activated
#' api.instance <- UserApi$new()
#'
#' #Configure API key authorization: Bearer
#' api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
#'
#' result <- api.instance$V1UsersChangeUnactivatedEmailPost(unactivated.email.update.request.dto=var.unactivated.email.update.request.dto)
#'
#'
#' ####################  V1UsersConfirmRegistrationPost  ####################
#'
#' library(qumranicaApiConnector)
#' var.account.activation.request.dto <- AccountActivationRequestDTO$new() # AccountActivationRequestDTO | JSON object with token from user registration email
#'
#' #Confirms registration of new user account.
#' api.instance <- UserApi$new()
#'
#' #Configure API key authorization: Bearer
#' api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
#'
#' result <- api.instance$V1UsersConfirmRegistrationPost(account.activation.request.dto=var.account.activation.request.dto)
#'
#'
#' ####################  V1UsersForgotPasswordPost  ####################
#'
#' library(qumranicaApiConnector)
#' var.reset.user.password.request.dto <- ResetUserPasswordRequestDTO$new() # ResetUserPasswordRequestDTO | JSON object with the email address for the user who wants to reset a lost password
#'
#' #Sends a secret token to the user's email to allow password reset.
#' api.instance <- UserApi$new()
#'
#' #Configure API key authorization: Bearer
#' api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
#'
#' result <- api.instance$V1UsersForgotPasswordPost(reset.user.password.request.dto=var.reset.user.password.request.dto)
#'
#'
#' ####################  V1UsersGet  ####################
#'
#' library(qumranicaApiConnector)
#'
#' #Provides the user details for a user with valid JWT in the Authorize header
#' api.instance <- UserApi$new()
#'
#' #Configure API key authorization: Bearer
#' api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
#'
#' result <- api.instance$V1UsersGet()
#'
#'
#' ####################  V1UsersLoginPost  ####################
#'
#' library(qumranicaApiConnector)
#' var.login.request.dto <- LoginRequestDTO$new() # LoginRequestDTO | JSON object with an email and password parameter
#'
#' #Provides a JWT bearer token for valid email and password
#' api.instance <- UserApi$new()
#'
#' #Configure API key authorization: Bearer
#' api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
#'
#' result <- api.instance$V1UsersLoginPost(login.request.dto=var.login.request.dto)
#'
#'
#' ####################  V1UsersPost  ####################
#'
#' library(qumranicaApiConnector)
#' var.new.user.request.dto <- NewUserRequestDTO$new() # NewUserRequestDTO | A JSON object with all data necessary to create a new user account
#'
#' #Creates a new user with the submitted data.
#' api.instance <- UserApi$new()
#'
#' #Configure API key authorization: Bearer
#' api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
#'
#' result <- api.instance$V1UsersPost(new.user.request.dto=var.new.user.request.dto)
#'
#'
#' ####################  V1UsersPut  ####################
#'
#' library(qumranicaApiConnector)
#' var.user.update.request.dto <- UserUpdateRequestDTO$new() # UserUpdateRequestDTO | A JSON object with all data necessary to update a user account.  Null fields (but not empty  strings!) will be populated with existing user data
#'
#' #Updates a user's registration details.  Note that the if the email address has changed, the account will be set to  inactive until the account is activated with the secret token.
#' api.instance <- UserApi$new()
#'
#' #Configure API key authorization: Bearer
#' api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
#'
#' result <- api.instance$V1UsersPut(user.update.request.dto=var.user.update.request.dto)
#'
#'
#' ####################  V1UsersResendActivationEmailPost  ####################
#'
#' library(qumranicaApiConnector)
#' var.resend.user.account.activation.request.dto <- ResendUserAccountActivationRequestDTO$new() # ResendUserAccountActivationRequestDTO | JSON object with the current email address and the new desired email address
#'
#' #Sends a new activation email for the user's account. This will not work if the user account associated with the  email address has already been activated.
#' api.instance <- UserApi$new()
#'
#' #Configure API key authorization: Bearer
#' api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
#'
#' result <- api.instance$V1UsersResendActivationEmailPost(resend.user.account.activation.request.dto=var.resend.user.account.activation.request.dto)
#'
#'
#' }
#' @importFrom R6 R6Class
#' @importFrom caTools base64encode
#' @export
UserApi <- R6::R6Class(
  'UserApi',
  public = list(
    apiClient = NULL,
    initialize = function(apiClient){
      if (!missing(apiClient)) {
        self$apiClient <- apiClient
      }
      else {
        self$apiClient <- ApiClient$new()
      }
    },
    V1UsersChangeForgottenPasswordPost = function(reset.forgotten.user.password.request.dto=NULL, ...){
      apiResponse <- self$V1UsersChangeForgottenPasswordPostWithHttpInfo(reset.forgotten.user.password.request.dto, ...)
      resp <- apiResponse$response
      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        apiResponse$content
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        apiResponse
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        apiResponse
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        apiResponse
      }
    },

    V1UsersChangeForgottenPasswordPostWithHttpInfo = function(reset.forgotten.user.password.request.dto=NULL, ...){
      args <- list(...)
      queryParams <- list()
      headerParams <- c()

      if (!missing(`reset.forgotten.user.password.request.dto`)) {
        body <- `reset.forgotten.user.password.request.dto`$toJSONString()
      } else {
        body <- NULL
      }

      urlPath <- "/v1/users/change-forgotten-password"
      # API key authentication
      if ("Authorization" %in% names(self$apiClient$apiKeys) && nchar(self$apiClient$apiKeys["Authorization"]) > 0) {
        headerParams['Authorization'] <- paste(unlist(self$apiClient$apiKeys["Authorization"]), collapse='')
      }

      resp <- self$apiClient$CallApi(url = paste0(self$apiClient$basePath, urlPath),
                                 method = "POST",
                                 queryParams = queryParams,
                                 headerParams = headerParams,
                                 body = body,
                                 ...)

      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        ApiResponse$new(NULL, resp)
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        ApiResponse$new(paste("Server returned " , httr::status_code(resp) , " response status code."), resp)
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        ApiResponse$new("API client error", resp)
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        ApiResponse$new("API server error", resp)
      }
    },
    V1UsersChangePasswordPost = function(reset.logged.in.user.password.request.dto=NULL, ...){
      apiResponse <- self$V1UsersChangePasswordPostWithHttpInfo(reset.logged.in.user.password.request.dto, ...)
      resp <- apiResponse$response
      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        apiResponse$content
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        apiResponse
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        apiResponse
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        apiResponse
      }
    },

    V1UsersChangePasswordPostWithHttpInfo = function(reset.logged.in.user.password.request.dto=NULL, ...){
      args <- list(...)
      queryParams <- list()
      headerParams <- c()

      if (!missing(`reset.logged.in.user.password.request.dto`)) {
        body <- `reset.logged.in.user.password.request.dto`$toJSONString()
      } else {
        body <- NULL
      }

      urlPath <- "/v1/users/change-password"
      # API key authentication
      if ("Authorization" %in% names(self$apiClient$apiKeys) && nchar(self$apiClient$apiKeys["Authorization"]) > 0) {
        headerParams['Authorization'] <- paste(unlist(self$apiClient$apiKeys["Authorization"]), collapse='')
      }

      resp <- self$apiClient$CallApi(url = paste0(self$apiClient$basePath, urlPath),
                                 method = "POST",
                                 queryParams = queryParams,
                                 headerParams = headerParams,
                                 body = body,
                                 ...)

      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        ApiResponse$new(NULL, resp)
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        ApiResponse$new(paste("Server returned " , httr::status_code(resp) , " response status code."), resp)
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        ApiResponse$new("API client error", resp)
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        ApiResponse$new("API server error", resp)
      }
    },
    V1UsersChangeUnactivatedEmailPost = function(unactivated.email.update.request.dto=NULL, ...){
      apiResponse <- self$V1UsersChangeUnactivatedEmailPostWithHttpInfo(unactivated.email.update.request.dto, ...)
      resp <- apiResponse$response
      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        apiResponse$content
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        apiResponse
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        apiResponse
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        apiResponse
      }
    },

    V1UsersChangeUnactivatedEmailPostWithHttpInfo = function(unactivated.email.update.request.dto=NULL, ...){
      args <- list(...)
      queryParams <- list()
      headerParams <- c()

      if (!missing(`unactivated.email.update.request.dto`)) {
        body <- `unactivated.email.update.request.dto`$toJSONString()
      } else {
        body <- NULL
      }

      urlPath <- "/v1/users/change-unactivated-email"
      # API key authentication
      if ("Authorization" %in% names(self$apiClient$apiKeys) && nchar(self$apiClient$apiKeys["Authorization"]) > 0) {
        headerParams['Authorization'] <- paste(unlist(self$apiClient$apiKeys["Authorization"]), collapse='')
      }

      resp <- self$apiClient$CallApi(url = paste0(self$apiClient$basePath, urlPath),
                                 method = "POST",
                                 queryParams = queryParams,
                                 headerParams = headerParams,
                                 body = body,
                                 ...)

      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        ApiResponse$new(NULL, resp)
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        ApiResponse$new(paste("Server returned " , httr::status_code(resp) , " response status code."), resp)
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        ApiResponse$new("API client error", resp)
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        ApiResponse$new("API server error", resp)
      }
    },
    V1UsersConfirmRegistrationPost = function(account.activation.request.dto=NULL, ...){
      apiResponse <- self$V1UsersConfirmRegistrationPostWithHttpInfo(account.activation.request.dto, ...)
      resp <- apiResponse$response
      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        apiResponse$content
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        apiResponse
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        apiResponse
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        apiResponse
      }
    },

    V1UsersConfirmRegistrationPostWithHttpInfo = function(account.activation.request.dto=NULL, ...){
      args <- list(...)
      queryParams <- list()
      headerParams <- c()

      if (!missing(`account.activation.request.dto`)) {
        body <- `account.activation.request.dto`$toJSONString()
      } else {
        body <- NULL
      }

      urlPath <- "/v1/users/confirm-registration"
      # API key authentication
      if ("Authorization" %in% names(self$apiClient$apiKeys) && nchar(self$apiClient$apiKeys["Authorization"]) > 0) {
        headerParams['Authorization'] <- paste(unlist(self$apiClient$apiKeys["Authorization"]), collapse='')
      }

      resp <- self$apiClient$CallApi(url = paste0(self$apiClient$basePath, urlPath),
                                 method = "POST",
                                 queryParams = queryParams,
                                 headerParams = headerParams,
                                 body = body,
                                 ...)

      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        ApiResponse$new(NULL, resp)
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        ApiResponse$new(paste("Server returned " , httr::status_code(resp) , " response status code."), resp)
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        ApiResponse$new("API client error", resp)
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        ApiResponse$new("API server error", resp)
      }
    },
    V1UsersForgotPasswordPost = function(reset.user.password.request.dto=NULL, ...){
      apiResponse <- self$V1UsersForgotPasswordPostWithHttpInfo(reset.user.password.request.dto, ...)
      resp <- apiResponse$response
      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        apiResponse$content
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        apiResponse
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        apiResponse
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        apiResponse
      }
    },

    V1UsersForgotPasswordPostWithHttpInfo = function(reset.user.password.request.dto=NULL, ...){
      args <- list(...)
      queryParams <- list()
      headerParams <- c()

      if (!missing(`reset.user.password.request.dto`)) {
        body <- `reset.user.password.request.dto`$toJSONString()
      } else {
        body <- NULL
      }

      urlPath <- "/v1/users/forgot-password"
      # API key authentication
      if ("Authorization" %in% names(self$apiClient$apiKeys) && nchar(self$apiClient$apiKeys["Authorization"]) > 0) {
        headerParams['Authorization'] <- paste(unlist(self$apiClient$apiKeys["Authorization"]), collapse='')
      }

      resp <- self$apiClient$CallApi(url = paste0(self$apiClient$basePath, urlPath),
                                 method = "POST",
                                 queryParams = queryParams,
                                 headerParams = headerParams,
                                 body = body,
                                 ...)

      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        ApiResponse$new(NULL, resp)
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        ApiResponse$new(paste("Server returned " , httr::status_code(resp) , " response status code."), resp)
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        ApiResponse$new("API client error", resp)
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        ApiResponse$new("API server error", resp)
      }
    },
    V1UsersGet = function(...){
      apiResponse <- self$V1UsersGetWithHttpInfo(...)
      resp <- apiResponse$response
      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        apiResponse$content
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        apiResponse
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        apiResponse
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        apiResponse
      }
    },

    V1UsersGetWithHttpInfo = function(...){
      args <- list(...)
      queryParams <- list()
      headerParams <- c()

      urlPath <- "/v1/users"
      # API key authentication
      if ("Authorization" %in% names(self$apiClient$apiKeys) && nchar(self$apiClient$apiKeys["Authorization"]) > 0) {
        headerParams['Authorization'] <- paste(unlist(self$apiClient$apiKeys["Authorization"]), collapse='')
      }

      resp <- self$apiClient$CallApi(url = paste0(self$apiClient$basePath, urlPath),
                                 method = "GET",
                                 queryParams = queryParams,
                                 headerParams = headerParams,
                                 body = body,
                                 ...)

      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        deserializedRespObj <- tryCatch(
          self$apiClient$deserialize(resp, "UserDTO", loadNamespace("qumranicaApiConnector")),
          error = function(e){
             stop("Failed to deserialize response")
          }
        )
        ApiResponse$new(deserializedRespObj, resp)
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        ApiResponse$new(paste("Server returned " , httr::status_code(resp) , " response status code."), resp)
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        ApiResponse$new("API client error", resp)
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        ApiResponse$new("API server error", resp)
      }
    },
    V1UsersLoginPost = function(login.request.dto=NULL, ...){
      apiResponse <- self$V1UsersLoginPostWithHttpInfo(login.request.dto, ...)
      resp <- apiResponse$response
      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        apiResponse$content
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        apiResponse
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        apiResponse
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        apiResponse
      }
    },

    V1UsersLoginPostWithHttpInfo = function(login.request.dto=NULL, ...){
      args <- list(...)
      queryParams <- list()
      headerParams <- c()

      if (!missing(`login.request.dto`)) {
        body <- `login.request.dto`$toJSONString()
      } else {
        body <- NULL
      }

      urlPath <- "/v1/users/login"
      # API key authentication
      if ("Authorization" %in% names(self$apiClient$apiKeys) && nchar(self$apiClient$apiKeys["Authorization"]) > 0) {
        headerParams['Authorization'] <- paste(unlist(self$apiClient$apiKeys["Authorization"]), collapse='')
      }

      resp <- self$apiClient$CallApi(url = paste0(self$apiClient$basePath, urlPath),
                                 method = "POST",
                                 queryParams = queryParams,
                                 headerParams = headerParams,
                                 body = body,
                                 ...)

      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        deserializedRespObj <- tryCatch(
          self$apiClient$deserialize(resp, "DetailedUserTokenDTO", loadNamespace("qumranicaApiConnector")),
          error = function(e){
             stop("Failed to deserialize response")
          }
        )
        ApiResponse$new(deserializedRespObj, resp)
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        ApiResponse$new(paste("Server returned " , httr::status_code(resp) , " response status code."), resp)
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        ApiResponse$new("API client error", resp)
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        ApiResponse$new("API server error", resp)
      }
    },
    V1UsersPost = function(new.user.request.dto=NULL, ...){
      apiResponse <- self$V1UsersPostWithHttpInfo(new.user.request.dto, ...)
      resp <- apiResponse$response
      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        apiResponse$content
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        apiResponse
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        apiResponse
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        apiResponse
      }
    },

    V1UsersPostWithHttpInfo = function(new.user.request.dto=NULL, ...){
      args <- list(...)
      queryParams <- list()
      headerParams <- c()

      if (!missing(`new.user.request.dto`)) {
        body <- `new.user.request.dto`$toJSONString()
      } else {
        body <- NULL
      }

      urlPath <- "/v1/users"
      # API key authentication
      if ("Authorization" %in% names(self$apiClient$apiKeys) && nchar(self$apiClient$apiKeys["Authorization"]) > 0) {
        headerParams['Authorization'] <- paste(unlist(self$apiClient$apiKeys["Authorization"]), collapse='')
      }

      resp <- self$apiClient$CallApi(url = paste0(self$apiClient$basePath, urlPath),
                                 method = "POST",
                                 queryParams = queryParams,
                                 headerParams = headerParams,
                                 body = body,
                                 ...)

      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        deserializedRespObj <- tryCatch(
          self$apiClient$deserialize(resp, "UserDTO", loadNamespace("qumranicaApiConnector")),
          error = function(e){
             stop("Failed to deserialize response")
          }
        )
        ApiResponse$new(deserializedRespObj, resp)
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        ApiResponse$new(paste("Server returned " , httr::status_code(resp) , " response status code."), resp)
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        ApiResponse$new("API client error", resp)
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        ApiResponse$new("API server error", resp)
      }
    },
    V1UsersPut = function(user.update.request.dto=NULL, ...){
      apiResponse <- self$V1UsersPutWithHttpInfo(user.update.request.dto, ...)
      resp <- apiResponse$response
      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        apiResponse$content
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        apiResponse
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        apiResponse
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        apiResponse
      }
    },

    V1UsersPutWithHttpInfo = function(user.update.request.dto=NULL, ...){
      args <- list(...)
      queryParams <- list()
      headerParams <- c()

      if (!missing(`user.update.request.dto`)) {
        body <- `user.update.request.dto`$toJSONString()
      } else {
        body <- NULL
      }

      urlPath <- "/v1/users"
      # API key authentication
      if ("Authorization" %in% names(self$apiClient$apiKeys) && nchar(self$apiClient$apiKeys["Authorization"]) > 0) {
        headerParams['Authorization'] <- paste(unlist(self$apiClient$apiKeys["Authorization"]), collapse='')
      }

      resp <- self$apiClient$CallApi(url = paste0(self$apiClient$basePath, urlPath),
                                 method = "PUT",
                                 queryParams = queryParams,
                                 headerParams = headerParams,
                                 body = body,
                                 ...)

      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        deserializedRespObj <- tryCatch(
          self$apiClient$deserialize(resp, "DetailedUserDTO", loadNamespace("qumranicaApiConnector")),
          error = function(e){
             stop("Failed to deserialize response")
          }
        )
        ApiResponse$new(deserializedRespObj, resp)
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        ApiResponse$new(paste("Server returned " , httr::status_code(resp) , " response status code."), resp)
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        ApiResponse$new("API client error", resp)
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        ApiResponse$new("API server error", resp)
      }
    },
    V1UsersResendActivationEmailPost = function(resend.user.account.activation.request.dto=NULL, ...){
      apiResponse <- self$V1UsersResendActivationEmailPostWithHttpInfo(resend.user.account.activation.request.dto, ...)
      resp <- apiResponse$response
      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        apiResponse$content
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        apiResponse
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        apiResponse
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        apiResponse
      }
    },

    V1UsersResendActivationEmailPostWithHttpInfo = function(resend.user.account.activation.request.dto=NULL, ...){
      args <- list(...)
      queryParams <- list()
      headerParams <- c()

      if (!missing(`resend.user.account.activation.request.dto`)) {
        body <- `resend.user.account.activation.request.dto`$toJSONString()
      } else {
        body <- NULL
      }

      urlPath <- "/v1/users/resend-activation-email"
      # API key authentication
      if ("Authorization" %in% names(self$apiClient$apiKeys) && nchar(self$apiClient$apiKeys["Authorization"]) > 0) {
        headerParams['Authorization'] <- paste(unlist(self$apiClient$apiKeys["Authorization"]), collapse='')
      }

      resp <- self$apiClient$CallApi(url = paste0(self$apiClient$basePath, urlPath),
                                 method = "POST",
                                 queryParams = queryParams,
                                 headerParams = headerParams,
                                 body = body,
                                 ...)

      if (httr::status_code(resp) >= 200 && httr::status_code(resp) <= 299) {
        ApiResponse$new(NULL, resp)
      } else if (httr::status_code(resp) >= 300 && httr::status_code(resp) <= 399) {
        ApiResponse$new(paste("Server returned " , httr::status_code(resp) , " response status code."), resp)
      } else if (httr::status_code(resp) >= 400 && httr::status_code(resp) <= 499) {
        ApiResponse$new("API client error", resp)
      } else if (httr::status_code(resp) >= 500 && httr::status_code(resp) <= 599) {
        ApiResponse$new("API server error", resp)
      }
    }
  )
)
