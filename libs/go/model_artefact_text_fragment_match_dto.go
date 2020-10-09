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

// ArtefactTextFragmentMatchDTO struct for ArtefactTextFragmentMatchDTO
type ArtefactTextFragmentMatchDTO struct {
	Suggested bool `json:"suggested"`
	Id int32 `json:"id"`
	Name string `json:"name"`
	EditorId int32 `json:"editorId"`
}

// NewArtefactTextFragmentMatchDTO instantiates a new ArtefactTextFragmentMatchDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewArtefactTextFragmentMatchDTO(suggested bool, id int32, name string, editorId int32, ) *ArtefactTextFragmentMatchDTO {
	this := ArtefactTextFragmentMatchDTO{}
	this.Suggested = suggested
	this.Id = id
	this.Name = name
	this.EditorId = editorId
	return &this
}

// NewArtefactTextFragmentMatchDTOWithDefaults instantiates a new ArtefactTextFragmentMatchDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewArtefactTextFragmentMatchDTOWithDefaults() *ArtefactTextFragmentMatchDTO {
	this := ArtefactTextFragmentMatchDTO{}
	return &this
}

// GetSuggested returns the Suggested field value
func (o *ArtefactTextFragmentMatchDTO) GetSuggested() bool {
	if o == nil  {
		var ret bool
		return ret
	}

	return o.Suggested
}

// GetSuggestedOk returns a tuple with the Suggested field value
// and a boolean to check if the value has been set.
func (o *ArtefactTextFragmentMatchDTO) GetSuggestedOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Suggested, true
}

// SetSuggested sets field value
func (o *ArtefactTextFragmentMatchDTO) SetSuggested(v bool) {
	o.Suggested = v
}

// GetId returns the Id field value
func (o *ArtefactTextFragmentMatchDTO) GetId() int32 {
	if o == nil  {
		var ret int32
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *ArtefactTextFragmentMatchDTO) GetIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *ArtefactTextFragmentMatchDTO) SetId(v int32) {
	o.Id = v
}

// GetName returns the Name field value
func (o *ArtefactTextFragmentMatchDTO) GetName() string {
	if o == nil  {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *ArtefactTextFragmentMatchDTO) GetNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *ArtefactTextFragmentMatchDTO) SetName(v string) {
	o.Name = v
}

// GetEditorId returns the EditorId field value
func (o *ArtefactTextFragmentMatchDTO) GetEditorId() int32 {
	if o == nil  {
		var ret int32
		return ret
	}

	return o.EditorId
}

// GetEditorIdOk returns a tuple with the EditorId field value
// and a boolean to check if the value has been set.
func (o *ArtefactTextFragmentMatchDTO) GetEditorIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.EditorId, true
}

// SetEditorId sets field value
func (o *ArtefactTextFragmentMatchDTO) SetEditorId(v int32) {
	o.EditorId = v
}

func (o ArtefactTextFragmentMatchDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["suggested"] = o.Suggested
	}
	if true {
		toSerialize["id"] = o.Id
	}
	if true {
		toSerialize["name"] = o.Name
	}
	if true {
		toSerialize["editorId"] = o.EditorId
	}
	return json.Marshal(toSerialize)
}

type NullableArtefactTextFragmentMatchDTO struct {
	value *ArtefactTextFragmentMatchDTO
	isSet bool
}

func (v NullableArtefactTextFragmentMatchDTO) Get() *ArtefactTextFragmentMatchDTO {
	return v.value
}

func (v *NullableArtefactTextFragmentMatchDTO) Set(val *ArtefactTextFragmentMatchDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableArtefactTextFragmentMatchDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableArtefactTextFragmentMatchDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableArtefactTextFragmentMatchDTO(val *ArtefactTextFragmentMatchDTO) *NullableArtefactTextFragmentMatchDTO {
	return &NullableArtefactTextFragmentMatchDTO{value: val, isSet: true}
}

func (v NullableArtefactTextFragmentMatchDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableArtefactTextFragmentMatchDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


