/*
 * SQE API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: v1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package qumranica_api_connector
// UpdateEditorRightsDto struct for UpdateEditorRightsDto
type UpdateEditorRightsDto struct {
	MayLock bool `json:"mayLock"`
	MayRead bool `json:"mayRead"`
	MayWrite bool `json:"mayWrite"`
	IsAdmin bool `json:"isAdmin"`
}
