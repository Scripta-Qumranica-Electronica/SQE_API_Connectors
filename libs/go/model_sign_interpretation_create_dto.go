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

// SignInterpretationCreateDTO struct for SignInterpretationCreateDTO
type SignInterpretationCreateDTO struct {
	LineId *int32 `json:"lineId,omitempty"`
	PreviousSignInterpretationIds []int32 `json:"previousSignInterpretationIds,omitempty"`
	NextSignInterpretationIds []int32 `json:"nextSignInterpretationIds,omitempty"`
	Attributes []InterpretationAttributeCreateDTO `json:"attributes"`
	Rois []SetInterpretationRoiDTO `json:"rois"`
	Commentary NullableCommentaryCreateDTO `json:"commentary,omitempty"`
	BreakPreviousAndNextSignInterpretations *bool `json:"breakPreviousAndNextSignInterpretations,omitempty"`
	Character NullableString `json:"character,omitempty"`
	IsVariant bool `json:"isVariant"`
}

// NewSignInterpretationCreateDTO instantiates a new SignInterpretationCreateDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSignInterpretationCreateDTO(attributes []InterpretationAttributeCreateDTO, rois []SetInterpretationRoiDTO, isVariant bool, ) *SignInterpretationCreateDTO {
	this := SignInterpretationCreateDTO{}
	this.Attributes = attributes
	this.Rois = rois
	this.IsVariant = isVariant
	return &this
}

// NewSignInterpretationCreateDTOWithDefaults instantiates a new SignInterpretationCreateDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSignInterpretationCreateDTOWithDefaults() *SignInterpretationCreateDTO {
	this := SignInterpretationCreateDTO{}
	return &this
}

// GetLineId returns the LineId field value if set, zero value otherwise.
func (o *SignInterpretationCreateDTO) GetLineId() int32 {
	if o == nil || o.LineId == nil {
		var ret int32
		return ret
	}
	return *o.LineId
}

// GetLineIdOk returns a tuple with the LineId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SignInterpretationCreateDTO) GetLineIdOk() (*int32, bool) {
	if o == nil || o.LineId == nil {
		return nil, false
	}
	return o.LineId, true
}

// HasLineId returns a boolean if a field has been set.
func (o *SignInterpretationCreateDTO) HasLineId() bool {
	if o != nil && o.LineId != nil {
		return true
	}

	return false
}

// SetLineId gets a reference to the given int32 and assigns it to the LineId field.
func (o *SignInterpretationCreateDTO) SetLineId(v int32) {
	o.LineId = &v
}

// GetPreviousSignInterpretationIds returns the PreviousSignInterpretationIds field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *SignInterpretationCreateDTO) GetPreviousSignInterpretationIds() []int32 {
	if o == nil  {
		var ret []int32
		return ret
	}
	return o.PreviousSignInterpretationIds
}

// GetPreviousSignInterpretationIdsOk returns a tuple with the PreviousSignInterpretationIds field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *SignInterpretationCreateDTO) GetPreviousSignInterpretationIdsOk() (*[]int32, bool) {
	if o == nil || o.PreviousSignInterpretationIds == nil {
		return nil, false
	}
	return &o.PreviousSignInterpretationIds, true
}

// HasPreviousSignInterpretationIds returns a boolean if a field has been set.
func (o *SignInterpretationCreateDTO) HasPreviousSignInterpretationIds() bool {
	if o != nil && o.PreviousSignInterpretationIds != nil {
		return true
	}

	return false
}

// SetPreviousSignInterpretationIds gets a reference to the given []int32 and assigns it to the PreviousSignInterpretationIds field.
func (o *SignInterpretationCreateDTO) SetPreviousSignInterpretationIds(v []int32) {
	o.PreviousSignInterpretationIds = v
}

// GetNextSignInterpretationIds returns the NextSignInterpretationIds field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *SignInterpretationCreateDTO) GetNextSignInterpretationIds() []int32 {
	if o == nil  {
		var ret []int32
		return ret
	}
	return o.NextSignInterpretationIds
}

// GetNextSignInterpretationIdsOk returns a tuple with the NextSignInterpretationIds field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *SignInterpretationCreateDTO) GetNextSignInterpretationIdsOk() (*[]int32, bool) {
	if o == nil || o.NextSignInterpretationIds == nil {
		return nil, false
	}
	return &o.NextSignInterpretationIds, true
}

// HasNextSignInterpretationIds returns a boolean if a field has been set.
func (o *SignInterpretationCreateDTO) HasNextSignInterpretationIds() bool {
	if o != nil && o.NextSignInterpretationIds != nil {
		return true
	}

	return false
}

// SetNextSignInterpretationIds gets a reference to the given []int32 and assigns it to the NextSignInterpretationIds field.
func (o *SignInterpretationCreateDTO) SetNextSignInterpretationIds(v []int32) {
	o.NextSignInterpretationIds = v
}

// GetAttributes returns the Attributes field value
func (o *SignInterpretationCreateDTO) GetAttributes() []InterpretationAttributeCreateDTO {
	if o == nil  {
		var ret []InterpretationAttributeCreateDTO
		return ret
	}

	return o.Attributes
}

// GetAttributesOk returns a tuple with the Attributes field value
// and a boolean to check if the value has been set.
func (o *SignInterpretationCreateDTO) GetAttributesOk() (*[]InterpretationAttributeCreateDTO, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Attributes, true
}

// SetAttributes sets field value
func (o *SignInterpretationCreateDTO) SetAttributes(v []InterpretationAttributeCreateDTO) {
	o.Attributes = v
}

// GetRois returns the Rois field value
func (o *SignInterpretationCreateDTO) GetRois() []SetInterpretationRoiDTO {
	if o == nil  {
		var ret []SetInterpretationRoiDTO
		return ret
	}

	return o.Rois
}

// GetRoisOk returns a tuple with the Rois field value
// and a boolean to check if the value has been set.
func (o *SignInterpretationCreateDTO) GetRoisOk() (*[]SetInterpretationRoiDTO, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Rois, true
}

// SetRois sets field value
func (o *SignInterpretationCreateDTO) SetRois(v []SetInterpretationRoiDTO) {
	o.Rois = v
}

// GetCommentary returns the Commentary field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *SignInterpretationCreateDTO) GetCommentary() CommentaryCreateDTO {
	if o == nil || o.Commentary.Get() == nil {
		var ret CommentaryCreateDTO
		return ret
	}
	return *o.Commentary.Get()
}

// GetCommentaryOk returns a tuple with the Commentary field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *SignInterpretationCreateDTO) GetCommentaryOk() (*CommentaryCreateDTO, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Commentary.Get(), o.Commentary.IsSet()
}

// HasCommentary returns a boolean if a field has been set.
func (o *SignInterpretationCreateDTO) HasCommentary() bool {
	if o != nil && o.Commentary.IsSet() {
		return true
	}

	return false
}

// SetCommentary gets a reference to the given NullableCommentaryCreateDTO and assigns it to the Commentary field.
func (o *SignInterpretationCreateDTO) SetCommentary(v CommentaryCreateDTO) {
	o.Commentary.Set(&v)
}
// SetCommentaryNil sets the value for Commentary to be an explicit nil
func (o *SignInterpretationCreateDTO) SetCommentaryNil() {
	o.Commentary.Set(nil)
}

// UnsetCommentary ensures that no value is present for Commentary, not even an explicit nil
func (o *SignInterpretationCreateDTO) UnsetCommentary() {
	o.Commentary.Unset()
}

// GetBreakPreviousAndNextSignInterpretations returns the BreakPreviousAndNextSignInterpretations field value if set, zero value otherwise.
func (o *SignInterpretationCreateDTO) GetBreakPreviousAndNextSignInterpretations() bool {
	if o == nil || o.BreakPreviousAndNextSignInterpretations == nil {
		var ret bool
		return ret
	}
	return *o.BreakPreviousAndNextSignInterpretations
}

// GetBreakPreviousAndNextSignInterpretationsOk returns a tuple with the BreakPreviousAndNextSignInterpretations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SignInterpretationCreateDTO) GetBreakPreviousAndNextSignInterpretationsOk() (*bool, bool) {
	if o == nil || o.BreakPreviousAndNextSignInterpretations == nil {
		return nil, false
	}
	return o.BreakPreviousAndNextSignInterpretations, true
}

// HasBreakPreviousAndNextSignInterpretations returns a boolean if a field has been set.
func (o *SignInterpretationCreateDTO) HasBreakPreviousAndNextSignInterpretations() bool {
	if o != nil && o.BreakPreviousAndNextSignInterpretations != nil {
		return true
	}

	return false
}

// SetBreakPreviousAndNextSignInterpretations gets a reference to the given bool and assigns it to the BreakPreviousAndNextSignInterpretations field.
func (o *SignInterpretationCreateDTO) SetBreakPreviousAndNextSignInterpretations(v bool) {
	o.BreakPreviousAndNextSignInterpretations = &v
}

// GetCharacter returns the Character field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *SignInterpretationCreateDTO) GetCharacter() string {
	if o == nil || o.Character.Get() == nil {
		var ret string
		return ret
	}
	return *o.Character.Get()
}

// GetCharacterOk returns a tuple with the Character field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *SignInterpretationCreateDTO) GetCharacterOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Character.Get(), o.Character.IsSet()
}

// HasCharacter returns a boolean if a field has been set.
func (o *SignInterpretationCreateDTO) HasCharacter() bool {
	if o != nil && o.Character.IsSet() {
		return true
	}

	return false
}

// SetCharacter gets a reference to the given NullableString and assigns it to the Character field.
func (o *SignInterpretationCreateDTO) SetCharacter(v string) {
	o.Character.Set(&v)
}
// SetCharacterNil sets the value for Character to be an explicit nil
func (o *SignInterpretationCreateDTO) SetCharacterNil() {
	o.Character.Set(nil)
}

// UnsetCharacter ensures that no value is present for Character, not even an explicit nil
func (o *SignInterpretationCreateDTO) UnsetCharacter() {
	o.Character.Unset()
}

// GetIsVariant returns the IsVariant field value
func (o *SignInterpretationCreateDTO) GetIsVariant() bool {
	if o == nil  {
		var ret bool
		return ret
	}

	return o.IsVariant
}

// GetIsVariantOk returns a tuple with the IsVariant field value
// and a boolean to check if the value has been set.
func (o *SignInterpretationCreateDTO) GetIsVariantOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.IsVariant, true
}

// SetIsVariant sets field value
func (o *SignInterpretationCreateDTO) SetIsVariant(v bool) {
	o.IsVariant = v
}

func (o SignInterpretationCreateDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.LineId != nil {
		toSerialize["lineId"] = o.LineId
	}
	if o.PreviousSignInterpretationIds != nil {
		toSerialize["previousSignInterpretationIds"] = o.PreviousSignInterpretationIds
	}
	if o.NextSignInterpretationIds != nil {
		toSerialize["nextSignInterpretationIds"] = o.NextSignInterpretationIds
	}
	if true {
		toSerialize["attributes"] = o.Attributes
	}
	if true {
		toSerialize["rois"] = o.Rois
	}
	if o.Commentary.IsSet() {
		toSerialize["commentary"] = o.Commentary.Get()
	}
	if o.BreakPreviousAndNextSignInterpretations != nil {
		toSerialize["breakPreviousAndNextSignInterpretations"] = o.BreakPreviousAndNextSignInterpretations
	}
	if o.Character.IsSet() {
		toSerialize["character"] = o.Character.Get()
	}
	if true {
		toSerialize["isVariant"] = o.IsVariant
	}
	return json.Marshal(toSerialize)
}

type NullableSignInterpretationCreateDTO struct {
	value *SignInterpretationCreateDTO
	isSet bool
}

func (v NullableSignInterpretationCreateDTO) Get() *SignInterpretationCreateDTO {
	return v.value
}

func (v *NullableSignInterpretationCreateDTO) Set(val *SignInterpretationCreateDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableSignInterpretationCreateDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableSignInterpretationCreateDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSignInterpretationCreateDTO(val *SignInterpretationCreateDTO) *NullableSignInterpretationCreateDTO {
	return &NullableSignInterpretationCreateDTO{value: val, isSet: true}
}

func (v NullableSignInterpretationCreateDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSignInterpretationCreateDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


