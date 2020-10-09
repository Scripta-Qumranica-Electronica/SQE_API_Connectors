/*
 * SQE API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: v1
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// InstitutionalImageDTO struct for InstitutionalImageDTO
type InstitutionalImageDTO struct {
	Id string `json:"id"`
	ThumbnailUrl string `json:"thumbnailUrl"`
	License string `json:"license"`
}

// NewInstitutionalImageDTO instantiates a new InstitutionalImageDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInstitutionalImageDTO(id string, thumbnailUrl string, license string, ) *InstitutionalImageDTO {
	this := InstitutionalImageDTO{}
	this.Id = id
	this.ThumbnailUrl = thumbnailUrl
	this.License = license
	return &this
}

// NewInstitutionalImageDTOWithDefaults instantiates a new InstitutionalImageDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInstitutionalImageDTOWithDefaults() *InstitutionalImageDTO {
	this := InstitutionalImageDTO{}
	return &this
}

// GetId returns the Id field value
func (o *InstitutionalImageDTO) GetId() string {
	if o == nil  {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *InstitutionalImageDTO) GetIdOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *InstitutionalImageDTO) SetId(v string) {
	o.Id = v
}

// GetThumbnailUrl returns the ThumbnailUrl field value
func (o *InstitutionalImageDTO) GetThumbnailUrl() string {
	if o == nil  {
		var ret string
		return ret
	}

	return o.ThumbnailUrl
}

// GetThumbnailUrlOk returns a tuple with the ThumbnailUrl field value
// and a boolean to check if the value has been set.
func (o *InstitutionalImageDTO) GetThumbnailUrlOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.ThumbnailUrl, true
}

// SetThumbnailUrl sets field value
func (o *InstitutionalImageDTO) SetThumbnailUrl(v string) {
	o.ThumbnailUrl = v
}

// GetLicense returns the License field value
func (o *InstitutionalImageDTO) GetLicense() string {
	if o == nil  {
		var ret string
		return ret
	}

	return o.License
}

// GetLicenseOk returns a tuple with the License field value
// and a boolean to check if the value has been set.
func (o *InstitutionalImageDTO) GetLicenseOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.License, true
}

// SetLicense sets field value
func (o *InstitutionalImageDTO) SetLicense(v string) {
	o.License = v
}

func (o InstitutionalImageDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["id"] = o.Id
	}
	if true {
		toSerialize["thumbnailUrl"] = o.ThumbnailUrl
	}
	if true {
		toSerialize["license"] = o.License
	}
	return json.Marshal(toSerialize)
}

type NullableInstitutionalImageDTO struct {
	value *InstitutionalImageDTO
	isSet bool
}

func (v NullableInstitutionalImageDTO) Get() *InstitutionalImageDTO {
	return v.value
}

func (v *NullableInstitutionalImageDTO) Set(val *InstitutionalImageDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableInstitutionalImageDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableInstitutionalImageDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInstitutionalImageDTO(val *InstitutionalImageDTO) *NullableInstitutionalImageDTO {
	return &NullableInstitutionalImageDTO{value: val, isSet: true}
}

func (v NullableInstitutionalImageDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInstitutionalImageDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


