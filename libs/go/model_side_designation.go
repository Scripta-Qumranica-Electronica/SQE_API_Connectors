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
	"fmt"
)

// SideDesignation the model 'SideDesignation'
type SideDesignation int32

// List of SideDesignation
const (
	_0 SideDesignation = 0
	_1 SideDesignation = 1
)

func (v *SideDesignation) UnmarshalJSON(src []byte) error {
	var value int32
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := SideDesignation(value)
	for _, existing := range []SideDesignation{ 0, 1,   } {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid SideDesignation", value)
}

// Ptr returns reference to SideDesignation value
func (v SideDesignation) Ptr() *SideDesignation {
	return &v
}

type NullableSideDesignation struct {
	value *SideDesignation
	isSet bool
}

func (v NullableSideDesignation) Get() *SideDesignation {
	return v.value
}

func (v *NullableSideDesignation) Set(val *SideDesignation) {
	v.value = val
	v.isSet = true
}

func (v NullableSideDesignation) IsSet() bool {
	return v.isSet
}

func (v *NullableSideDesignation) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSideDesignation(val *SideDesignation) *NullableSideDesignation {
	return &NullableSideDesignation{value: val, isSet: true}
}

func (v NullableSideDesignation) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSideDesignation) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

