/*
 * SQE API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: v1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package qumranica_api_connector
// InterpretationAttributeDto struct for InterpretationAttributeDto
type InterpretationAttributeDto struct {
	InterpretationAttributeId int32 `json:"interpretationAttributeId"`
	AttributeString string `json:"attributeString"`
	AttributeValueString string `json:"attributeValueString"`
	CreatorId int32 `json:"creatorId"`
	EditorId int32 `json:"editorId"`
	Commentary *CommentaryDto `json:"commentary,omitempty"`
	Sequence *int32 `json:"sequence,omitempty"`
	AttributeId int32 `json:"attributeId"`
	AttributeValueId int32 `json:"attributeValueId"`
}
