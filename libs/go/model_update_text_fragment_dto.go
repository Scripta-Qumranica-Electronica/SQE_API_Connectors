/*
 * SQE API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: v1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package qumranica_api_connector
// UpdateTextFragmentDto struct for UpdateTextFragmentDto
type UpdateTextFragmentDto struct {
	Name *string `json:"name,omitempty"`
	PreviousTextFragmentId *int32 `json:"previousTextFragmentId,omitempty"`
	NextTextFragmentId *int32 `json:"nextTextFragmentId,omitempty"`
}
