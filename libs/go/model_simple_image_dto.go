/*
 * SQE API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: v1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package qumranica_api_connector
// SimpleImageDto struct for SimpleImageDto
type SimpleImageDto struct {
	Id int32 `json:"id"`
	Url string `json:"url"`
	LightingType Lighting `json:"lightingType"`
	LightingDirection Direction `json:"lightingDirection"`
	WaveLength []string `json:"waveLength"`
	Type string `json:"type"`
	Side SideDesignation `json:"side"`
	Ppi int32 `json:"ppi"`
	Master bool `json:"master"`
	CatalogNumber int32 `json:"catalogNumber"`
}
