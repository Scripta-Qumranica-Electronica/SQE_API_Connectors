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

// BatchEditRoiResponseDTO struct for BatchEditRoiResponseDTO
type BatchEditRoiResponseDTO struct {
	CreateRois []InterpretationRoiDTO `json:"createRois"`
	UpdateRois []UpdatedInterpretationRoiDTO `json:"updateRois"`
	DeleteRois []int32 `json:"deleteRois"`
}

// NewBatchEditRoiResponseDTO instantiates a new BatchEditRoiResponseDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBatchEditRoiResponseDTO(createRois []InterpretationRoiDTO, updateRois []UpdatedInterpretationRoiDTO, deleteRois []int32, ) *BatchEditRoiResponseDTO {
	this := BatchEditRoiResponseDTO{}
	this.CreateRois = createRois
	this.UpdateRois = updateRois
	this.DeleteRois = deleteRois
	return &this
}

// NewBatchEditRoiResponseDTOWithDefaults instantiates a new BatchEditRoiResponseDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBatchEditRoiResponseDTOWithDefaults() *BatchEditRoiResponseDTO {
	this := BatchEditRoiResponseDTO{}
	return &this
}

// GetCreateRois returns the CreateRois field value
func (o *BatchEditRoiResponseDTO) GetCreateRois() []InterpretationRoiDTO {
	if o == nil  {
		var ret []InterpretationRoiDTO
		return ret
	}

	return o.CreateRois
}

// GetCreateRoisOk returns a tuple with the CreateRois field value
// and a boolean to check if the value has been set.
func (o *BatchEditRoiResponseDTO) GetCreateRoisOk() (*[]InterpretationRoiDTO, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.CreateRois, true
}

// SetCreateRois sets field value
func (o *BatchEditRoiResponseDTO) SetCreateRois(v []InterpretationRoiDTO) {
	o.CreateRois = v
}

// GetUpdateRois returns the UpdateRois field value
func (o *BatchEditRoiResponseDTO) GetUpdateRois() []UpdatedInterpretationRoiDTO {
	if o == nil  {
		var ret []UpdatedInterpretationRoiDTO
		return ret
	}

	return o.UpdateRois
}

// GetUpdateRoisOk returns a tuple with the UpdateRois field value
// and a boolean to check if the value has been set.
func (o *BatchEditRoiResponseDTO) GetUpdateRoisOk() (*[]UpdatedInterpretationRoiDTO, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.UpdateRois, true
}

// SetUpdateRois sets field value
func (o *BatchEditRoiResponseDTO) SetUpdateRois(v []UpdatedInterpretationRoiDTO) {
	o.UpdateRois = v
}

// GetDeleteRois returns the DeleteRois field value
func (o *BatchEditRoiResponseDTO) GetDeleteRois() []int32 {
	if o == nil  {
		var ret []int32
		return ret
	}

	return o.DeleteRois
}

// GetDeleteRoisOk returns a tuple with the DeleteRois field value
// and a boolean to check if the value has been set.
func (o *BatchEditRoiResponseDTO) GetDeleteRoisOk() (*[]int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.DeleteRois, true
}

// SetDeleteRois sets field value
func (o *BatchEditRoiResponseDTO) SetDeleteRois(v []int32) {
	o.DeleteRois = v
}

func (o BatchEditRoiResponseDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["createRois"] = o.CreateRois
	}
	if true {
		toSerialize["updateRois"] = o.UpdateRois
	}
	if true {
		toSerialize["deleteRois"] = o.DeleteRois
	}
	return json.Marshal(toSerialize)
}

type NullableBatchEditRoiResponseDTO struct {
	value *BatchEditRoiResponseDTO
	isSet bool
}

func (v NullableBatchEditRoiResponseDTO) Get() *BatchEditRoiResponseDTO {
	return v.value
}

func (v *NullableBatchEditRoiResponseDTO) Set(val *BatchEditRoiResponseDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableBatchEditRoiResponseDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableBatchEditRoiResponseDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBatchEditRoiResponseDTO(val *BatchEditRoiResponseDTO) *NullableBatchEditRoiResponseDTO {
	return &NullableBatchEditRoiResponseDTO{value: val, isSet: true}
}

func (v NullableBatchEditRoiResponseDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBatchEditRoiResponseDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

