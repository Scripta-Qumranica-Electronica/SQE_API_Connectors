# SQE API
#
# No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
#
# The version of the OpenAPI document: v1
# 
# Generated by: https://openapi-generator.tech

#' @docType class
#' @title ImagedObject operations
#' @description qumranicaApiConnector.ImagedObject
#' @format An \code{R6Class} generator object
#' @field apiClient Handles the client-server communication.
#'
#' @section Methods:
#' \describe{
#' \strong{ V1EditionsEditionIdImagedObjectsGet } \emph{ Provides a listing of imaged objects related to the specified edition, can include images and also their masks with  optional. }
#' 
#'
#' \itemize{
#' \item \emph{ @param } edition.id integer
#' \item \emph{ @param } optional list( character )
#' \item \emph{ @returnType } \link{ImagedObjectListDTO} \cr
#'
#'
#' \item status code : 200 | Success
#'
#' \item return type : ImagedObjectListDTO 
#' \item response headers :
#'
#' \tabular{ll}{
#' }
#' }
#'
#' \strong{ V1EditionsEditionIdImagedObjectsImagedObjectIdGet } \emph{ Provides information for the specified imaged object related to the specified edition, can include images and also  their masks with optional. }
#' 
#'
#' \itemize{
#' \item \emph{ @param } edition.id integer
#' \item \emph{ @param } imaged.object.id character
#' \item \emph{ @param } optional list( character )
#' \item \emph{ @returnType } \link{ImagedObjectDTO} \cr
#'
#'
#' \item status code : 200 | Success
#'
#' \item return type : ImagedObjectDTO 
#' \item response headers :
#'
#' \tabular{ll}{
#' }
#' }
#'
#' \strong{ V1ImagedObjectsImagedObjectIdGet } \emph{ Provides information for the specified imaged object. }
#' 
#'
#' \itemize{
#' \item \emph{ @param } imaged.object.id character
#' \item \emph{ @returnType } \link{SimpleImageListDTO} \cr
#'
#'
#' \item status code : 200 | Success
#'
#' \item return type : SimpleImageListDTO 
#' \item response headers :
#'
#' \tabular{ll}{
#' }
#' }
#'
#' \strong{ V1ImagedObjectsImagedObjectIdTextFragmentsGet } \emph{ Provides a list of all text fragments that should correspond to the imaged object. }
#' 
#'
#' \itemize{
#' \item \emph{ @param } imaged.object.id character
#' \item \emph{ @returnType } \link{ImagedObjectTextFragmentMatchListDTO} \cr
#'
#'
#' \item status code : 200 | Success
#'
#' \item return type : ImagedObjectTextFragmentMatchListDTO 
#' \item response headers :
#'
#' \tabular{ll}{
#' }
#' }
#'
#' \strong{ V1ImagedObjectsInstitutionsGet } \emph{ Provides a list of all institutional image providers. }
#' 
#'
#' \itemize{
#' \item \emph{ @returnType } \link{ImageInstitutionListDTO} \cr
#'
#'
#' \item status code : 200 | Success
#'
#' \item return type : ImageInstitutionListDTO 
#' \item response headers :
#'
#' \tabular{ll}{
#' }
#' }
#'
#' \strong{ V1ImagedObjectsInstitutionsInstitutionNameGet } \emph{ Provides a list of all institutional image providers. }
#' 
#'
#' \itemize{
#' \item \emph{ @param } institution.name character
#' \item \emph{ @returnType } \link{InstitutionalImageListDTO} \cr
#'
#'
#' \item status code : 200 | Success
#'
#' \item return type : InstitutionalImageListDTO 
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
#' ####################  V1EditionsEditionIdImagedObjectsGet  ####################
#'
#' library(qumranicaApiConnector)
#' var.edition.id <- 56 # integer | Unique Id of the desired edition
#' var.optional <- ['optional_example'] # array[character] | Set 'artefacts' to receive related artefact data and 'masks' to include the artefact masks
#'
#' #Provides a listing of imaged objects related to the specified edition, can include images and also their masks with  optional.
#' api.instance <- ImagedObjectApi$new()
#'
#' #Configure API key authorization: Bearer
#' api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
#'
#' result <- api.instance$V1EditionsEditionIdImagedObjectsGet(var.edition.id, optional=var.optional)
#'
#'
#' ####################  V1EditionsEditionIdImagedObjectsImagedObjectIdGet  ####################
#'
#' library(qumranicaApiConnector)
#' var.edition.id <- 56 # integer | Unique Id of the desired edition
#' var.imaged.object.id <- 'imaged.object.id_example' # character | Unique Id of the desired object from the imaging Institution
#' var.optional <- ['optional_example'] # array[character] | Set 'artefacts' to receive related artefact data and 'masks' to include the artefact masks
#'
#' #Provides information for the specified imaged object related to the specified edition, can include images and also  their masks with optional.
#' api.instance <- ImagedObjectApi$new()
#'
#' #Configure API key authorization: Bearer
#' api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
#'
#' result <- api.instance$V1EditionsEditionIdImagedObjectsImagedObjectIdGet(var.edition.id, var.imaged.object.id, optional=var.optional)
#'
#'
#' ####################  V1ImagedObjectsImagedObjectIdGet  ####################
#'
#' library(qumranicaApiConnector)
#' var.imaged.object.id <- 'imaged.object.id_example' # character | Unique Id of the desired object from the imaging Institution
#'
#' #Provides information for the specified imaged object.
#' api.instance <- ImagedObjectApi$new()
#'
#' #Configure API key authorization: Bearer
#' api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
#'
#' result <- api.instance$V1ImagedObjectsImagedObjectIdGet(var.imaged.object.id)
#'
#'
#' ####################  V1ImagedObjectsImagedObjectIdTextFragmentsGet  ####################
#'
#' library(qumranicaApiConnector)
#' var.imaged.object.id <- 'imaged.object.id_example' # character | Id of the imaged object
#'
#' #Provides a list of all text fragments that should correspond to the imaged object.
#' api.instance <- ImagedObjectApi$new()
#'
#' #Configure API key authorization: Bearer
#' api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
#'
#' result <- api.instance$V1ImagedObjectsImagedObjectIdTextFragmentsGet(var.imaged.object.id)
#'
#'
#' ####################  V1ImagedObjectsInstitutionsGet  ####################
#'
#' library(qumranicaApiConnector)
#'
#' #Provides a list of all institutional image providers.
#' api.instance <- ImagedObjectApi$new()
#'
#' #Configure API key authorization: Bearer
#' api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
#'
#' result <- api.instance$V1ImagedObjectsInstitutionsGet()
#'
#'
#' ####################  V1ImagedObjectsInstitutionsInstitutionNameGet  ####################
#'
#' library(qumranicaApiConnector)
#' var.institution.name <- 'institution.name_example' # character | 
#'
#' #Provides a list of all institutional image providers.
#' api.instance <- ImagedObjectApi$new()
#'
#' #Configure API key authorization: Bearer
#' api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
#'
#' result <- api.instance$V1ImagedObjectsInstitutionsInstitutionNameGet(var.institution.name)
#'
#'
#' }
#' @importFrom R6 R6Class
#' @importFrom caTools base64encode
#' @export
ImagedObjectApi <- R6::R6Class(
  'ImagedObjectApi',
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
    V1EditionsEditionIdImagedObjectsGet = function(edition.id, optional=NULL, ...){
      apiResponse <- self$V1EditionsEditionIdImagedObjectsGetWithHttpInfo(edition.id, optional, ...)
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

    V1EditionsEditionIdImagedObjectsGetWithHttpInfo = function(edition.id, optional=NULL, ...){
      args <- list(...)
      queryParams <- list()
      headerParams <- c()

      if (missing(`edition.id`)) {
        stop("Missing required parameter `edition.id`.")
      }

      queryParams['optional'] <- optional

      urlPath <- "/v1/editions/{editionId}/imaged-objects"
      if (!missing(`edition.id`)) {
        urlPath <- gsub(paste0("\\{", "editionId", "\\}"), URLencode(as.character(`edition.id`), reserved = TRUE), urlPath)
      }

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
          self$apiClient$deserialize(resp, "ImagedObjectListDTO", loadNamespace("qumranicaApiConnector")),
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
    V1EditionsEditionIdImagedObjectsImagedObjectIdGet = function(edition.id, imaged.object.id, optional=NULL, ...){
      apiResponse <- self$V1EditionsEditionIdImagedObjectsImagedObjectIdGetWithHttpInfo(edition.id, imaged.object.id, optional, ...)
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

    V1EditionsEditionIdImagedObjectsImagedObjectIdGetWithHttpInfo = function(edition.id, imaged.object.id, optional=NULL, ...){
      args <- list(...)
      queryParams <- list()
      headerParams <- c()

      if (missing(`edition.id`)) {
        stop("Missing required parameter `edition.id`.")
      }

      if (missing(`imaged.object.id`)) {
        stop("Missing required parameter `imaged.object.id`.")
      }

      queryParams['optional'] <- optional

      urlPath <- "/v1/editions/{editionId}/imaged-objects/{imagedObjectId}"
      if (!missing(`edition.id`)) {
        urlPath <- gsub(paste0("\\{", "editionId", "\\}"), URLencode(as.character(`edition.id`), reserved = TRUE), urlPath)
      }

      if (!missing(`imaged.object.id`)) {
        urlPath <- gsub(paste0("\\{", "imagedObjectId", "\\}"), URLencode(as.character(`imaged.object.id`), reserved = TRUE), urlPath)
      }

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
          self$apiClient$deserialize(resp, "ImagedObjectDTO", loadNamespace("qumranicaApiConnector")),
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
    V1ImagedObjectsImagedObjectIdGet = function(imaged.object.id, ...){
      apiResponse <- self$V1ImagedObjectsImagedObjectIdGetWithHttpInfo(imaged.object.id, ...)
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

    V1ImagedObjectsImagedObjectIdGetWithHttpInfo = function(imaged.object.id, ...){
      args <- list(...)
      queryParams <- list()
      headerParams <- c()

      if (missing(`imaged.object.id`)) {
        stop("Missing required parameter `imaged.object.id`.")
      }

      urlPath <- "/v1/imaged-objects/{imagedObjectId}"
      if (!missing(`imaged.object.id`)) {
        urlPath <- gsub(paste0("\\{", "imagedObjectId", "\\}"), URLencode(as.character(`imaged.object.id`), reserved = TRUE), urlPath)
      }

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
          self$apiClient$deserialize(resp, "SimpleImageListDTO", loadNamespace("qumranicaApiConnector")),
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
    V1ImagedObjectsImagedObjectIdTextFragmentsGet = function(imaged.object.id, ...){
      apiResponse <- self$V1ImagedObjectsImagedObjectIdTextFragmentsGetWithHttpInfo(imaged.object.id, ...)
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

    V1ImagedObjectsImagedObjectIdTextFragmentsGetWithHttpInfo = function(imaged.object.id, ...){
      args <- list(...)
      queryParams <- list()
      headerParams <- c()

      if (missing(`imaged.object.id`)) {
        stop("Missing required parameter `imaged.object.id`.")
      }

      urlPath <- "/v1/imaged-objects/{imagedObjectId}/text-fragments"
      if (!missing(`imaged.object.id`)) {
        urlPath <- gsub(paste0("\\{", "imagedObjectId", "\\}"), URLencode(as.character(`imaged.object.id`), reserved = TRUE), urlPath)
      }

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
          self$apiClient$deserialize(resp, "ImagedObjectTextFragmentMatchListDTO", loadNamespace("qumranicaApiConnector")),
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
    V1ImagedObjectsInstitutionsGet = function(...){
      apiResponse <- self$V1ImagedObjectsInstitutionsGetWithHttpInfo(...)
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

    V1ImagedObjectsInstitutionsGetWithHttpInfo = function(...){
      args <- list(...)
      queryParams <- list()
      headerParams <- c()

      urlPath <- "/v1/imaged-objects/institutions"
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
          self$apiClient$deserialize(resp, "ImageInstitutionListDTO", loadNamespace("qumranicaApiConnector")),
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
    V1ImagedObjectsInstitutionsInstitutionNameGet = function(institution.name, ...){
      apiResponse <- self$V1ImagedObjectsInstitutionsInstitutionNameGetWithHttpInfo(institution.name, ...)
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

    V1ImagedObjectsInstitutionsInstitutionNameGetWithHttpInfo = function(institution.name, ...){
      args <- list(...)
      queryParams <- list()
      headerParams <- c()

      if (missing(`institution.name`)) {
        stop("Missing required parameter `institution.name`.")
      }

      urlPath <- "/v1/imaged-objects/institutions/{institutionName}"
      if (!missing(`institution.name`)) {
        urlPath <- gsub(paste0("\\{", "institutionName", "\\}"), URLencode(as.character(`institution.name`), reserved = TRUE), urlPath)
      }

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
          self$apiClient$deserialize(resp, "InstitutionalImageListDTO", loadNamespace("qumranicaApiConnector")),
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
    }
  )
)
