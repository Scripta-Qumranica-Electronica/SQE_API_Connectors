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

// SignDTO struct for SignDTO
type SignDTO struct {
	SignInterpretations []SignInterpretationDTO `json:"signInterpretations"`
}

// NewSignDTO instantiates a new SignDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSignDTO(signInterpretations []SignInterpretationDTO, ) *SignDTO {
	this := SignDTO{}
	this.SignInterpretations = signInterpretations
	return &this
}

// NewSignDTOWithDefaults instantiates a new SignDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSignDTOWithDefaults() *SignDTO {
	this := SignDTO{}
	return &this
}

// GetSignInterpretations returns the SignInterpretations field value
func (o *SignDTO) GetSignInterpretations() []SignInterpretationDTO {
	if o == nil  {
		var ret []SignInterpretationDTO
		return ret
	}

	return o.SignInterpretations
}

// GetSignInterpretationsOk returns a tuple with the SignInterpretations field value
// and a boolean to check if the value has been set.
func (o *SignDTO) GetSignInterpretationsOk() (*[]SignInterpretationDTO, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.SignInterpretations, true
}

// SetSignInterpretations sets field value
func (o *SignDTO) SetSignInterpretations(v []SignInterpretationDTO) {
	o.SignInterpretations = v
}

func (o SignDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["signInterpretations"] = o.SignInterpretations
	}
	return json.Marshal(toSerialize)
}

type NullableSignDTO struct {
	value *SignDTO
	isSet bool
}

func (v NullableSignDTO) Get() *SignDTO {
	return v.value
}

func (v *NullableSignDTO) Set(val *SignDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableSignDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableSignDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSignDTO(val *SignDTO) *NullableSignDTO {
	return &NullableSignDTO{value: val, isSet: true}
}

func (v NullableSignDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSignDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


