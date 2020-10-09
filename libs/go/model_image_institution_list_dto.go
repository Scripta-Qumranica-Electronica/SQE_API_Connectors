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

// ImageInstitutionListDTO struct for ImageInstitutionListDTO
type ImageInstitutionListDTO struct {
	Institutions []ImageInstitutionDTO `json:"institutions"`
}

// NewImageInstitutionListDTO instantiates a new ImageInstitutionListDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewImageInstitutionListDTO(institutions []ImageInstitutionDTO, ) *ImageInstitutionListDTO {
	this := ImageInstitutionListDTO{}
	this.Institutions = institutions
	return &this
}

// NewImageInstitutionListDTOWithDefaults instantiates a new ImageInstitutionListDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewImageInstitutionListDTOWithDefaults() *ImageInstitutionListDTO {
	this := ImageInstitutionListDTO{}
	return &this
}

// GetInstitutions returns the Institutions field value
func (o *ImageInstitutionListDTO) GetInstitutions() []ImageInstitutionDTO {
	if o == nil  {
		var ret []ImageInstitutionDTO
		return ret
	}

	return o.Institutions
}

// GetInstitutionsOk returns a tuple with the Institutions field value
// and a boolean to check if the value has been set.
func (o *ImageInstitutionListDTO) GetInstitutionsOk() (*[]ImageInstitutionDTO, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Institutions, true
}

// SetInstitutions sets field value
func (o *ImageInstitutionListDTO) SetInstitutions(v []ImageInstitutionDTO) {
	o.Institutions = v
}

func (o ImageInstitutionListDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["institutions"] = o.Institutions
	}
	return json.Marshal(toSerialize)
}

type NullableImageInstitutionListDTO struct {
	value *ImageInstitutionListDTO
	isSet bool
}

func (v NullableImageInstitutionListDTO) Get() *ImageInstitutionListDTO {
	return v.value
}

func (v *NullableImageInstitutionListDTO) Set(val *ImageInstitutionListDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableImageInstitutionListDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableImageInstitutionListDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableImageInstitutionListDTO(val *ImageInstitutionListDTO) *NullableImageInstitutionListDTO {
	return &NullableImageInstitutionListDTO{value: val, isSet: true}
}

func (v NullableImageInstitutionListDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableImageInstitutionListDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

