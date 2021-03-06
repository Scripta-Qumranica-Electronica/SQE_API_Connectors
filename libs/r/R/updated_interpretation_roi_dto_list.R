# SQE API
#
# No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
#
# The version of the OpenAPI document: v1
# 
# Generated by: https://openapi-generator.tech

#' @docType class
#' @title UpdatedInterpretationRoiDTOList
#' @description UpdatedInterpretationRoiDTOList Class
#' @format An \code{R6Class} generator object
#' @field rois  list( \link{UpdatedInterpretationRoiDTO} ) 
#'
#'
#' @importFrom R6 R6Class
#' @importFrom jsonlite fromJSON toJSON
#' @export
UpdatedInterpretationRoiDTOList <- R6::R6Class(
  'UpdatedInterpretationRoiDTOList',
  public = list(
    `rois` = NULL,
    initialize = function(`rois`, ...){
      local.optional.var <- list(...)
      if (!missing(`rois`)) {
        stopifnot(is.vector(`rois`), length(`rois`) != 0)
        sapply(`rois`, function(x) stopifnot(R6::is.R6(x)))
        self$`rois` <- `rois`
      }
    },
    toJSON = function() {
      UpdatedInterpretationRoiDTOListObject <- list()
      if (!is.null(self$`rois`)) {
        UpdatedInterpretationRoiDTOListObject[['rois']] <-
          lapply(self$`rois`, function(x) x$toJSON())
      }

      UpdatedInterpretationRoiDTOListObject
    },
    fromJSON = function(UpdatedInterpretationRoiDTOListJson) {
      UpdatedInterpretationRoiDTOListObject <- jsonlite::fromJSON(UpdatedInterpretationRoiDTOListJson)
      if (!is.null(UpdatedInterpretationRoiDTOListObject$`rois`)) {
        self$`rois` <- ApiClient$new()$deserializeObj(UpdatedInterpretationRoiDTOListObject$`rois`, "array[UpdatedInterpretationRoiDTO]", loadNamespace("qumranicaApiConnector"))
      }
    },
    toJSONString = function() {
      jsoncontent <- c(
        if (!is.null(self$`rois`)) {
        sprintf(
        '"rois":
        [%s]
',
        paste(sapply(self$`rois`, function(x) jsonlite::toJSON(x$toJSON(), auto_unbox=TRUE, digits = NA)), collapse=",")
        )}
      )
      jsoncontent <- paste(jsoncontent, collapse = ",")
      paste('{', jsoncontent, '}', sep = "")
    },
    fromJSONString = function(UpdatedInterpretationRoiDTOListJson) {
      UpdatedInterpretationRoiDTOListObject <- jsonlite::fromJSON(UpdatedInterpretationRoiDTOListJson)
      self$`rois` <- ApiClient$new()$deserializeObj(UpdatedInterpretationRoiDTOListObject$`rois`, "array[UpdatedInterpretationRoiDTO]", loadNamespace("qumranicaApiConnector"))
      self
    }
  )
)
