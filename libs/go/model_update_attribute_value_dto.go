/*
 * SQE API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: v1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package qumranica_api_connector
// UpdateAttributeValueDto struct for UpdateAttributeValueDto
type UpdateAttributeValueDto struct {
	Id int32 `json:"id"`
	Value string `json:"value"`
	Description *string `json:"description,omitempty"`
	CssDirectives *string `json:"cssDirectives,omitempty"`
}
