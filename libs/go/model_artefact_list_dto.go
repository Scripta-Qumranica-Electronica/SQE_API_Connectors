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

// ArtefactListDTO struct for ArtefactListDTO
type ArtefactListDTO struct {
	Artefacts []ArtefactDTO `json:"artefacts"`
}

// NewArtefactListDTO instantiates a new ArtefactListDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewArtefactListDTO(artefacts []ArtefactDTO, ) *ArtefactListDTO {
	this := ArtefactListDTO{}
	this.Artefacts = artefacts
	return &this
}

// NewArtefactListDTOWithDefaults instantiates a new ArtefactListDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewArtefactListDTOWithDefaults() *ArtefactListDTO {
	this := ArtefactListDTO{}
	return &this
}

// GetArtefacts returns the Artefacts field value
func (o *ArtefactListDTO) GetArtefacts() []ArtefactDTO {
	if o == nil  {
		var ret []ArtefactDTO
		return ret
	}

	return o.Artefacts
}

// GetArtefactsOk returns a tuple with the Artefacts field value
// and a boolean to check if the value has been set.
func (o *ArtefactListDTO) GetArtefactsOk() (*[]ArtefactDTO, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Artefacts, true
}

// SetArtefacts sets field value
func (o *ArtefactListDTO) SetArtefacts(v []ArtefactDTO) {
	o.Artefacts = v
}

func (o ArtefactListDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["artefacts"] = o.Artefacts
	}
	return json.Marshal(toSerialize)
}

type NullableArtefactListDTO struct {
	value *ArtefactListDTO
	isSet bool
}

func (v NullableArtefactListDTO) Get() *ArtefactListDTO {
	return v.value
}

func (v *NullableArtefactListDTO) Set(val *ArtefactListDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableArtefactListDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableArtefactListDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableArtefactListDTO(val *ArtefactListDTO) *NullableArtefactListDTO {
	return &NullableArtefactListDTO{value: val, isSet: true}
}

func (v NullableArtefactListDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableArtefactListDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


