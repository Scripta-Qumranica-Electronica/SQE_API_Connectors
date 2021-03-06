# SQE API
#
# No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
#
# The version of the OpenAPI document: v1
# 
# Generated by: https://openapi-generator.tech

#' @docType class
#' @title EditionGroupDTO
#' @description EditionGroupDTO Class
#' @format An \code{R6Class} generator object
#' @field primary  \link{EditionDTO} 
#'
#' @field others  list( \link{EditionDTO} ) 
#'
#'
#' @importFrom R6 R6Class
#' @importFrom jsonlite fromJSON toJSON
#' @export
EditionGroupDTO <- R6::R6Class(
  'EditionGroupDTO',
  public = list(
    `primary` = NULL,
    `others` = NULL,
    initialize = function(`primary`, `others`, ...){
      local.optional.var <- list(...)
      if (!missing(`primary`)) {
        stopifnot(R6::is.R6(`primary`))
        self$`primary` <- `primary`
      }
      if (!missing(`others`)) {
        stopifnot(is.vector(`others`), length(`others`) != 0)
        sapply(`others`, function(x) stopifnot(R6::is.R6(x)))
        self$`others` <- `others`
      }
    },
    toJSON = function() {
      EditionGroupDTOObject <- list()
      if (!is.null(self$`primary`)) {
        EditionGroupDTOObject[['primary']] <-
          self$`primary`$toJSON()
      }
      if (!is.null(self$`others`)) {
        EditionGroupDTOObject[['others']] <-
          lapply(self$`others`, function(x) x$toJSON())
      }

      EditionGroupDTOObject
    },
    fromJSON = function(EditionGroupDTOJson) {
      EditionGroupDTOObject <- jsonlite::fromJSON(EditionGroupDTOJson)
      if (!is.null(EditionGroupDTOObject$`primary`)) {
        primaryObject <- EditionDTO$new()
        primaryObject$fromJSON(jsonlite::toJSON(EditionGroupDTOObject$primary, auto_unbox = TRUE, digits = NA))
        self$`primary` <- primaryObject
      }
      if (!is.null(EditionGroupDTOObject$`others`)) {
        self$`others` <- ApiClient$new()$deserializeObj(EditionGroupDTOObject$`others`, "array[EditionDTO]", loadNamespace("qumranicaApiConnector"))
      }
    },
    toJSONString = function() {
      jsoncontent <- c(
        if (!is.null(self$`primary`)) {
        sprintf(
        '"primary":
        %s
        ',
        jsonlite::toJSON(self$`primary`$toJSON(), auto_unbox=TRUE, digits = NA)
        )},
        if (!is.null(self$`others`)) {
        sprintf(
        '"others":
        [%s]
',
        paste(sapply(self$`others`, function(x) jsonlite::toJSON(x$toJSON(), auto_unbox=TRUE, digits = NA)), collapse=",")
        )}
      )
      jsoncontent <- paste(jsoncontent, collapse = ",")
      paste('{', jsoncontent, '}', sep = "")
    },
    fromJSONString = function(EditionGroupDTOJson) {
      EditionGroupDTOObject <- jsonlite::fromJSON(EditionGroupDTOJson)
      self$`primary` <- EditionDTO$new()$fromJSON(jsonlite::toJSON(EditionGroupDTOObject$primary, auto_unbox = TRUE, digits = NA))
      self$`others` <- ApiClient$new()$deserializeObj(EditionGroupDTOObject$`others`, "array[EditionDTO]", loadNamespace("qumranicaApiConnector"))
      self
    }
  )
)
