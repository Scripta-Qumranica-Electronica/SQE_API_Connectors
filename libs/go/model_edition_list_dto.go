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

// EditionListDTO struct for EditionListDTO
type EditionListDTO struct {
	Editions [][]EditionDTO `json:"editions"`
}

// NewEditionListDTO instantiates a new EditionListDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEditionListDTO(editions [][]EditionDTO, ) *EditionListDTO {
	this := EditionListDTO{}
	this.Editions = editions
	return &this
}

// NewEditionListDTOWithDefaults instantiates a new EditionListDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEditionListDTOWithDefaults() *EditionListDTO {
	this := EditionListDTO{}
	return &this
}

// GetEditions returns the Editions field value
func (o *EditionListDTO) GetEditions() [][]EditionDTO {
	if o == nil  {
		var ret [][]EditionDTO
		return ret
	}

	return o.Editions
}

// GetEditionsOk returns a tuple with the Editions field value
// and a boolean to check if the value has been set.
func (o *EditionListDTO) GetEditionsOk() (*[][]EditionDTO, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Editions, true
}

// SetEditions sets field value
func (o *EditionListDTO) SetEditions(v [][]EditionDTO) {
	o.Editions = v
}

func (o EditionListDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["editions"] = o.Editions
	}
	return json.Marshal(toSerialize)
}

type NullableEditionListDTO struct {
	value *EditionListDTO
	isSet bool
}

func (v NullableEditionListDTO) Get() *EditionListDTO {
	return v.value
}

func (v *NullableEditionListDTO) Set(val *EditionListDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableEditionListDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableEditionListDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEditionListDTO(val *EditionListDTO) *NullableEditionListDTO {
	return &NullableEditionListDTO{value: val, isSet: true}
}

func (v NullableEditionListDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEditionListDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

