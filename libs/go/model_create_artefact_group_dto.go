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

// CreateArtefactGroupDTO struct for CreateArtefactGroupDTO
type CreateArtefactGroupDTO struct {
	Name string `json:"name"`
	Artefacts []int32 `json:"artefacts"`
}

// NewCreateArtefactGroupDTO instantiates a new CreateArtefactGroupDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreateArtefactGroupDTO(name string, artefacts []int32, ) *CreateArtefactGroupDTO {
	this := CreateArtefactGroupDTO{}
	this.Name = name
	this.Artefacts = artefacts
	return &this
}

// NewCreateArtefactGroupDTOWithDefaults instantiates a new CreateArtefactGroupDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCreateArtefactGroupDTOWithDefaults() *CreateArtefactGroupDTO {
	this := CreateArtefactGroupDTO{}
	return &this
}

// GetName returns the Name field value
func (o *CreateArtefactGroupDTO) GetName() string {
	if o == nil  {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *CreateArtefactGroupDTO) GetNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *CreateArtefactGroupDTO) SetName(v string) {
	o.Name = v
}

// GetArtefacts returns the Artefacts field value
func (o *CreateArtefactGroupDTO) GetArtefacts() []int32 {
	if o == nil  {
		var ret []int32
		return ret
	}

	return o.Artefacts
}

// GetArtefactsOk returns a tuple with the Artefacts field value
// and a boolean to check if the value has been set.
func (o *CreateArtefactGroupDTO) GetArtefactsOk() (*[]int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Artefacts, true
}

// SetArtefacts sets field value
func (o *CreateArtefactGroupDTO) SetArtefacts(v []int32) {
	o.Artefacts = v
}

func (o CreateArtefactGroupDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["name"] = o.Name
	}
	if true {
		toSerialize["artefacts"] = o.Artefacts
	}
	return json.Marshal(toSerialize)
}

type NullableCreateArtefactGroupDTO struct {
	value *CreateArtefactGroupDTO
	isSet bool
}

func (v NullableCreateArtefactGroupDTO) Get() *CreateArtefactGroupDTO {
	return v.value
}

func (v *NullableCreateArtefactGroupDTO) Set(val *CreateArtefactGroupDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableCreateArtefactGroupDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableCreateArtefactGroupDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCreateArtefactGroupDTO(val *CreateArtefactGroupDTO) *NullableCreateArtefactGroupDTO {
	return &NullableCreateArtefactGroupDTO{value: val, isSet: true}
}

func (v NullableCreateArtefactGroupDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCreateArtefactGroupDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


