/*
 * SQE API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: v1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package qumranica_api_connector
// TextFragmentDto struct for TextFragmentDto
type TextFragmentDto struct {
	TextFragmentId int32 `json:"textFragmentId"`
	TextFragmentName string `json:"textFragmentName"`
	EditorId int32 `json:"editorId"`
	Lines []LineDto `json:"lines"`
}
