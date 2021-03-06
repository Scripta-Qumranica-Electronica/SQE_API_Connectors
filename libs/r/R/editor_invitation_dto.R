# SQE API
#
# No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
#
# The version of the OpenAPI document: v1
# 
# Generated by: https://openapi-generator.tech

#' @docType class
#' @title EditorInvitationDTO
#' @description EditorInvitationDTO Class
#' @format An \code{R6Class} generator object
#' @field token  character 
#'
#' @field requestingAdminName  character 
#'
#' @field requestingAdminEmail  character 
#'
#' @field editionId  integer 
#'
#' @field editionName  character 
#'
#' @field date  character 
#'
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
EditorInvitationDTO <- R6::R6Class(
  'EditorInvitationDTO',
  public = list(
    `token` = NULL,
    `requestingAdminName` = NULL,
    `requestingAdminEmail` = NULL,
    `editionId` = NULL,
    `editionName` = NULL,
    `date` = NULL,
    `mayLock` = NULL,
    `mayRead` = NULL,
    `mayWrite` = NULL,
    `isAdmin` = NULL,
    initialize = function(`token`, `requestingAdminName`, `requestingAdminEmail`, `editionId`, `editionName`, `date`, `mayLock`, `mayRead`, `mayWrite`, `isAdmin`, ...){
      local.optional.var <- list(...)
      if (!missing(`token`)) {
        stopifnot(is.character(`token`), length(`token`) == 1)
        self$`token` <- `token`
      }
      if (!missing(`requestingAdminName`)) {
        stopifnot(is.character(`requestingAdminName`), length(`requestingAdminName`) == 1)
        self$`requestingAdminName` <- `requestingAdminName`
      }
      if (!missing(`requestingAdminEmail`)) {
        stopifnot(is.character(`requestingAdminEmail`), length(`requestingAdminEmail`) == 1)
        self$`requestingAdminEmail` <- `requestingAdminEmail`
      }
      if (!missing(`editionId`)) {
        stopifnot(is.numeric(`editionId`), length(`editionId`) == 1)
        self$`editionId` <- `editionId`
      }
      if (!missing(`editionName`)) {
        stopifnot(is.character(`editionName`), length(`editionName`) == 1)
        self$`editionName` <- `editionName`
      }
      if (!missing(`date`)) {
        stopifnot(is.character(`date`), length(`date`) == 1)
        self$`date` <- `date`
      }
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
      EditorInvitationDTOObject <- list()
      if (!is.null(self$`token`)) {
        EditorInvitationDTOObject[['token']] <-
          self$`token`
      }
      if (!is.null(self$`requestingAdminName`)) {
        EditorInvitationDTOObject[['requestingAdminName']] <-
          self$`requestingAdminName`
      }
      if (!is.null(self$`requestingAdminEmail`)) {
        EditorInvitationDTOObject[['requestingAdminEmail']] <-
          self$`requestingAdminEmail`
      }
      if (!is.null(self$`editionId`)) {
        EditorInvitationDTOObject[['editionId']] <-
          self$`editionId`
      }
      if (!is.null(self$`editionName`)) {
        EditorInvitationDTOObject[['editionName']] <-
          self$`editionName`
      }
      if (!is.null(self$`date`)) {
        EditorInvitationDTOObject[['date']] <-
          self$`date`
      }
      if (!is.null(self$`mayLock`)) {
        EditorInvitationDTOObject[['mayLock']] <-
          self$`mayLock`
      }
      if (!is.null(self$`mayRead`)) {
        EditorInvitationDTOObject[['mayRead']] <-
          self$`mayRead`
      }
      if (!is.null(self$`mayWrite`)) {
        EditorInvitationDTOObject[['mayWrite']] <-
          self$`mayWrite`
      }
      if (!is.null(self$`isAdmin`)) {
        EditorInvitationDTOObject[['isAdmin']] <-
          self$`isAdmin`
      }

      EditorInvitationDTOObject
    },
    fromJSON = function(EditorInvitationDTOJson) {
      EditorInvitationDTOObject <- jsonlite::fromJSON(EditorInvitationDTOJson)
      if (!is.null(EditorInvitationDTOObject$`token`)) {
        self$`token` <- EditorInvitationDTOObject$`token`
      }
      if (!is.null(EditorInvitationDTOObject$`requestingAdminName`)) {
        self$`requestingAdminName` <- EditorInvitationDTOObject$`requestingAdminName`
      }
      if (!is.null(EditorInvitationDTOObject$`requestingAdminEmail`)) {
        self$`requestingAdminEmail` <- EditorInvitationDTOObject$`requestingAdminEmail`
      }
      if (!is.null(EditorInvitationDTOObject$`editionId`)) {
        self$`editionId` <- EditorInvitationDTOObject$`editionId`
      }
      if (!is.null(EditorInvitationDTOObject$`editionName`)) {
        self$`editionName` <- EditorInvitationDTOObject$`editionName`
      }
      if (!is.null(EditorInvitationDTOObject$`date`)) {
        self$`date` <- EditorInvitationDTOObject$`date`
      }
      if (!is.null(EditorInvitationDTOObject$`mayLock`)) {
        self$`mayLock` <- EditorInvitationDTOObject$`mayLock`
      }
      if (!is.null(EditorInvitationDTOObject$`mayRead`)) {
        self$`mayRead` <- EditorInvitationDTOObject$`mayRead`
      }
      if (!is.null(EditorInvitationDTOObject$`mayWrite`)) {
        self$`mayWrite` <- EditorInvitationDTOObject$`mayWrite`
      }
      if (!is.null(EditorInvitationDTOObject$`isAdmin`)) {
        self$`isAdmin` <- EditorInvitationDTOObject$`isAdmin`
      }
    },
    toJSONString = function() {
      jsoncontent <- c(
        if (!is.null(self$`token`)) {
        sprintf(
        '"token":
          "%s"
                ',
        self$`token`
        )},
        if (!is.null(self$`requestingAdminName`)) {
        sprintf(
        '"requestingAdminName":
          "%s"
                ',
        self$`requestingAdminName`
        )},
        if (!is.null(self$`requestingAdminEmail`)) {
        sprintf(
        '"requestingAdminEmail":
          "%s"
                ',
        self$`requestingAdminEmail`
        )},
        if (!is.null(self$`editionId`)) {
        sprintf(
        '"editionId":
          %d
                ',
        self$`editionId`
        )},
        if (!is.null(self$`editionName`)) {
        sprintf(
        '"editionName":
          "%s"
                ',
        self$`editionName`
        )},
        if (!is.null(self$`date`)) {
        sprintf(
        '"date":
          "%s"
                ',
        self$`date`
        )},
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
    fromJSONString = function(EditorInvitationDTOJson) {
      EditorInvitationDTOObject <- jsonlite::fromJSON(EditorInvitationDTOJson)
      self$`token` <- EditorInvitationDTOObject$`token`
      self$`requestingAdminName` <- EditorInvitationDTOObject$`requestingAdminName`
      self$`requestingAdminEmail` <- EditorInvitationDTOObject$`requestingAdminEmail`
      self$`editionId` <- EditorInvitationDTOObject$`editionId`
      self$`editionName` <- EditorInvitationDTOObject$`editionName`
      self$`date` <- EditorInvitationDTOObject$`date`
      self$`mayLock` <- EditorInvitationDTOObject$`mayLock`
      self$`mayRead` <- EditorInvitationDTOObject$`mayRead`
      self$`mayWrite` <- EditorInvitationDTOObject$`mayWrite`
      self$`isAdmin` <- EditorInvitationDTOObject$`isAdmin`
      self
    }
  )
)
