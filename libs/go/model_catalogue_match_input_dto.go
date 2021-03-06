/*
 * SQE API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: v1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package qumranica_api_connector
// CatalogueMatchInputDto struct for CatalogueMatchInputDto
type CatalogueMatchInputDto struct {
	CatalogSide SideDesignation `json:"catalogSide,omitempty"`
	ImagedObjectId string `json:"imagedObjectId"`
	ManuscriptId int32 `json:"manuscriptId"`
	EditionName string `json:"editionName"`
	EditionVolume string `json:"editionVolume"`
	EditionLocation1 string `json:"editionLocation1"`
	EditionLocation2 string `json:"editionLocation2"`
	EditionSide SideDesignation `json:"editionSide"`
	Comment *string `json:"comment,omitempty"`
	TextFragmentId int32 `json:"textFragmentId"`
	EditionId int32 `json:"editionId"`
	Confirmed *bool `json:"confirmed,omitempty"`
}
