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

// InterpretationRoiDTOList struct for InterpretationRoiDTOList
type InterpretationRoiDTOList struct {
	Rois []InterpretationRoiDTO `json:"rois"`
}

// NewInterpretationRoiDTOList instantiates a new InterpretationRoiDTOList object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInterpretationRoiDTOList(rois []InterpretationRoiDTO, ) *InterpretationRoiDTOList {
	this := InterpretationRoiDTOList{}
	this.Rois = rois
	return &this
}

// NewInterpretationRoiDTOListWithDefaults instantiates a new InterpretationRoiDTOList object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInterpretationRoiDTOListWithDefaults() *InterpretationRoiDTOList {
	this := InterpretationRoiDTOList{}
	return &this
}

// GetRois returns the Rois field value
func (o *InterpretationRoiDTOList) GetRois() []InterpretationRoiDTO {
	if o == nil  {
		var ret []InterpretationRoiDTO
		return ret
	}

	return o.Rois
}

// GetRoisOk returns a tuple with the Rois field value
// and a boolean to check if the value has been set.
func (o *InterpretationRoiDTOList) GetRoisOk() (*[]InterpretationRoiDTO, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Rois, true
}

// SetRois sets field value
func (o *InterpretationRoiDTOList) SetRois(v []InterpretationRoiDTO) {
	o.Rois = v
}

func (o InterpretationRoiDTOList) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["rois"] = o.Rois
	}
	return json.Marshal(toSerialize)
}

type NullableInterpretationRoiDTOList struct {
	value *InterpretationRoiDTOList
	isSet bool
}

func (v NullableInterpretationRoiDTOList) Get() *InterpretationRoiDTOList {
	return v.value
}

func (v *NullableInterpretationRoiDTOList) Set(val *InterpretationRoiDTOList) {
	v.value = val
	v.isSet = true
}

func (v NullableInterpretationRoiDTOList) IsSet() bool {
	return v.isSet
}

func (v *NullableInterpretationRoiDTOList) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInterpretationRoiDTOList(val *InterpretationRoiDTOList) *NullableInterpretationRoiDTOList {
	return &NullableInterpretationRoiDTOList{value: val, isSet: true}
}

func (v NullableInterpretationRoiDTOList) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInterpretationRoiDTOList) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


