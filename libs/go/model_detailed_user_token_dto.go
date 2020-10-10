/*
 * SQE API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: v1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package qumranica_api_connector
// DetailedUserTokenDto struct for DetailedUserTokenDto
type DetailedUserTokenDto struct {
	Token string `json:"token"`
	Forename *string `json:"forename,omitempty"`
	Surname *string `json:"surname,omitempty"`
	Organization *string `json:"organization,omitempty"`
	Activated bool `json:"activated"`
	UserId int32 `json:"userId"`
	Email string `json:"email"`
}
