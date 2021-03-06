# SQE API
#
# No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
#
# The version of the OpenAPI document: v1
# 
# Generated by: https://openapi-generator.tech

#' @docType class
#' @title ArtefactGroupListDTO
#' @description ArtefactGroupListDTO Class
#' @format An \code{R6Class} generator object
#' @field artefactGroups  list( \link{ArtefactGroupDTO} ) 
#'
#'
#' @importFrom R6 R6Class
#' @importFrom jsonlite fromJSON toJSON
#' @export
ArtefactGroupListDTO <- R6::R6Class(
  'ArtefactGroupListDTO',
  public = list(
    `artefactGroups` = NULL,
    initialize = function(`artefactGroups`, ...){
      local.optional.var <- list(...)
      if (!missing(`artefactGroups`)) {
        stopifnot(is.vector(`artefactGroups`), length(`artefactGroups`) != 0)
        sapply(`artefactGroups`, function(x) stopifnot(R6::is.R6(x)))
        self$`artefactGroups` <- `artefactGroups`
      }
    },
    toJSON = function() {
      ArtefactGroupListDTOObject <- list()
      if (!is.null(self$`artefactGroups`)) {
        ArtefactGroupListDTOObject[['artefactGroups']] <-
          lapply(self$`artefactGroups`, function(x) x$toJSON())
      }

      ArtefactGroupListDTOObject
    },
    fromJSON = function(ArtefactGroupListDTOJson) {
      ArtefactGroupListDTOObject <- jsonlite::fromJSON(ArtefactGroupListDTOJson)
      if (!is.null(ArtefactGroupListDTOObject$`artefactGroups`)) {
        self$`artefactGroups` <- ApiClient$new()$deserializeObj(ArtefactGroupListDTOObject$`artefactGroups`, "array[ArtefactGroupDTO]", loadNamespace("qumranicaApiConnector"))
      }
    },
    toJSONString = function() {
      jsoncontent <- c(
        if (!is.null(self$`artefactGroups`)) {
        sprintf(
        '"artefactGroups":
        [%s]
',
        paste(sapply(self$`artefactGroups`, function(x) jsonlite::toJSON(x$toJSON(), auto_unbox=TRUE, digits = NA)), collapse=",")
        )}
      )
      jsoncontent <- paste(jsoncontent, collapse = ",")
      paste('{', jsoncontent, '}', sep = "")
    },
    fromJSONString = function(ArtefactGroupListDTOJson) {
      ArtefactGroupListDTOObject <- jsonlite::fromJSON(ArtefactGroupListDTOJson)
      self$`artefactGroups` <- ApiClient$new()$deserializeObj(ArtefactGroupListDTOObject$`artefactGroups`, "array[ArtefactGroupDTO]", loadNamespace("qumranicaApiConnector"))
      self
    }
  )
)
