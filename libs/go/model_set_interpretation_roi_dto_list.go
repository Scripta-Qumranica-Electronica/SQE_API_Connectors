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

// SetInterpretationRoiDTOList struct for SetInterpretationRoiDTOList
type SetInterpretationRoiDTOList struct {
	Rois []SetInterpretationRoiDTO `json:"rois"`
}

// NewSetInterpretationRoiDTOList instantiates a new SetInterpretationRoiDTOList object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSetInterpretationRoiDTOList(rois []SetInterpretationRoiDTO, ) *SetInterpretationRoiDTOList {
	this := SetInterpretationRoiDTOList{}
	this.Rois = rois
	return &this
}

// NewSetInterpretationRoiDTOListWithDefaults instantiates a new SetInterpretationRoiDTOList object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSetInterpretationRoiDTOListWithDefaults() *SetInterpretationRoiDTOList {
	this := SetInterpretationRoiDTOList{}
	return &this
}

// GetRois returns the Rois field value
func (o *SetInterpretationRoiDTOList) GetRois() []SetInterpretationRoiDTO {
	if o == nil  {
		var ret []SetInterpretationRoiDTO
		return ret
	}

	return o.Rois
}

// GetRoisOk returns a tuple with the Rois field value
// and a boolean to check if the value has been set.
func (o *SetInterpretationRoiDTOList) GetRoisOk() (*[]SetInterpretationRoiDTO, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Rois, true
}

// SetRois sets field value
func (o *SetInterpretationRoiDTOList) SetRois(v []SetInterpretationRoiDTO) {
	o.Rois = v
}

func (o SetInterpretationRoiDTOList) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["rois"] = o.Rois
	}
	return json.Marshal(toSerialize)
}

type NullableSetInterpretationRoiDTOList struct {
	value *SetInterpretationRoiDTOList
	isSet bool
}

func (v NullableSetInterpretationRoiDTOList) Get() *SetInterpretationRoiDTOList {
	return v.value
}

func (v *NullableSetInterpretationRoiDTOList) Set(val *SetInterpretationRoiDTOList) {
	v.value = val
	v.isSet = true
}

func (v NullableSetInterpretationRoiDTOList) IsSet() bool {
	return v.isSet
}

func (v *NullableSetInterpretationRoiDTOList) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSetInterpretationRoiDTOList(val *SetInterpretationRoiDTOList) *NullableSetInterpretationRoiDTOList {
	return &NullableSetInterpretationRoiDTOList{value: val, isSet: true}
}

func (v NullableSetInterpretationRoiDTOList) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSetInterpretationRoiDTOList) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


