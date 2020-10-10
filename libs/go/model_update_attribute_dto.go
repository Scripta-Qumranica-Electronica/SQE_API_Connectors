/*
 * SQE API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: v1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package qumranica_api_connector
// UpdateAttributeDto struct for UpdateAttributeDto
type UpdateAttributeDto struct {
	CreateValues []CreateAttributeValueDto `json:"createValues"`
	UpdateValues []UpdateAttributeValueDto `json:"updateValues"`
	DeleteValues []int32 `json:"deleteValues"`
	Editable bool `json:"editable,omitempty"`
	Removable bool `json:"removable,omitempty"`
	Repeatable bool `json:"repeatable,omitempty"`
	BatchEditable bool `json:"batchEditable,omitempty"`
}
