/*
 * SQE API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: v1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package qumranica_api_connector
// SignInterpretationDto struct for SignInterpretationDto
type SignInterpretationDto struct {
	SignInterpretationId int32 `json:"signInterpretationId"`
	NextSignInterpretations []NextSignInterpretationDto `json:"nextSignInterpretations"`
	Attributes []InterpretationAttributeDto `json:"attributes"`
	Rois []InterpretationRoiDto `json:"rois"`
	Commentary *CommentaryDto `json:"commentary,omitempty"`
	Character *string `json:"character,omitempty"`
	IsVariant bool `json:"isVariant"`
}
