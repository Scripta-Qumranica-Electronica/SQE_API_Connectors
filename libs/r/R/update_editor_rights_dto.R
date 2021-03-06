# SQE API
#
# No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
#
# The version of the OpenAPI document: v1
# 
# Generated by: https://openapi-generator.tech

#' @docType class
#' @title UpdateEditorRightsDTO
#' @description UpdateEditorRightsDTO Class
#' @format An \code{R6Class} generator object
#' @field mayLock  character 
#'
#' @field mayRead  character 
#'
#' @field mayWrite  character 
#'
#' @field isAdmin  character 
#'
#'
#' @importFrom R6 R6Class
#' @importFrom jsonlite fromJSON toJSON
#' @export
UpdateEditorRightsDTO <- R6::R6Class(
  'UpdateEditorRightsDTO',
  public = list(
    `mayLock` = NULL,
    `mayRead` = NULL,
    `mayWrite` = NULL,
    `isAdmin` = NULL,
    initialize = function(`mayLock`, `mayRead`, `mayWrite`, `isAdmin`, ...){
      local.optional.var <- list(...)
      if (!missing(`mayLock`)) {
        self$`mayLock` <- `mayLock`
      }
      if (!missing(`mayRead`)) {
        self$`mayRead` <- `mayRead`
      }
      if (!missing(`mayWrite`)) {
        self$`mayWrite` <- `mayWrite`
      }
      if (!missing(`isAdmin`)) {
        self$`isAdmin` <- `isAdmin`
      }
    },
    toJSON = function() {
      UpdateEditorRightsDTOObject <- list()
      if (!is.null(self$`mayLock`)) {
        UpdateEditorRightsDTOObject[['mayLock']] <-
          self$`mayLock`
      }
      if (!is.null(self$`mayRead`)) {
        UpdateEditorRightsDTOObject[['mayRead']] <-
          self$`mayRead`
      }
      if (!is.null(self$`mayWrite`)) {
        UpdateEditorRightsDTOObject[['mayWrite']] <-
          self$`mayWrite`
      }
      if (!is.null(self$`isAdmin`)) {
        UpdateEditorRightsDTOObject[['isAdmin']] <-
          self$`isAdmin`
      }

      UpdateEditorRightsDTOObject
    },
    fromJSON = function(UpdateEditorRightsDTOJson) {
      UpdateEditorRightsDTOObject <- jsonlite::fromJSON(UpdateEditorRightsDTOJson)
      if (!is.null(UpdateEditorRightsDTOObject$`mayLock`)) {
        self$`mayLock` <- UpdateEditorRightsDTOObject$`mayLock`
      }
      if (!is.null(UpdateEditorRightsDTOObject$`mayRead`)) {
        self$`mayRead` <- UpdateEditorRightsDTOObject$`mayRead`
      }
      if (!is.null(UpdateEditorRightsDTOObject$`mayWrite`)) {
        self$`mayWrite` <- UpdateEditorRightsDTOObject$`mayWrite`
      }
      if (!is.null(UpdateEditorRightsDTOObject$`isAdmin`)) {
        self$`isAdmin` <- UpdateEditorRightsDTOObject$`isAdmin`
      }
    },
    toJSONString = function() {
      jsoncontent <- c(
        if (!is.null(self$`mayLock`)) {
        sprintf(
        '"mayLock":
          "%s"
                ',
        self$`mayLock`
        )},
        if (!is.null(self$`mayRead`)) {
        sprintf(
        '"mayRead":
          "%s"
                ',
        self$`mayRead`
        )},
        if (!is.null(self$`mayWrite`)) {
        sprintf(
        '"mayWrite":
          "%s"
                ',
        self$`mayWrite`
        )},
        if (!is.null(self$`isAdmin`)) {
        sprintf(
        '"isAdmin":
          "%s"
                ',
        self$`isAdmin`
        )}
      )
      jsoncontent <- paste(jsoncontent, collapse = ",")
      paste('{', jsoncontent, '}', sep = "")
    },
    fromJSONString = function(UpdateEditorRightsDTOJson) {
      UpdateEditorRightsDTOObject <- jsonlite::fromJSON(UpdateEditorRightsDTOJson)
      self$`mayLock` <- UpdateEditorRightsDTOObject$`mayLock`
      self$`mayRead` <- UpdateEditorRightsDTOObject$`mayRead`
      self$`mayWrite` <- UpdateEditorRightsDTOObject$`mayWrite`
      self$`isAdmin` <- UpdateEditorRightsDTOObject$`isAdmin`
      self
    }
  )
)
