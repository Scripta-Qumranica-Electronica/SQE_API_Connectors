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

// ScriptArtefactCharactersDTO struct for ScriptArtefactCharactersDTO
type ScriptArtefactCharactersDTO struct {
	ArtefactName string `json:"artefactName"`
	ArtefactId int32 `json:"artefactId"`
	Placement PlacementDTO `json:"placement"`
	Characters []SignInterpretationDTO `json:"characters"`
}

// NewScriptArtefactCharactersDTO instantiates a new ScriptArtefactCharactersDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewScriptArtefactCharactersDTO(artefactName string, artefactId int32, placement PlacementDTO, characters []SignInterpretationDTO, ) *ScriptArtefactCharactersDTO {
	this := ScriptArtefactCharactersDTO{}
	this.ArtefactName = artefactName
	this.ArtefactId = artefactId
	this.Placement = placement
	this.Characters = characters
	return &this
}

// NewScriptArtefactCharactersDTOWithDefaults instantiates a new ScriptArtefactCharactersDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewScriptArtefactCharactersDTOWithDefaults() *ScriptArtefactCharactersDTO {
	this := ScriptArtefactCharactersDTO{}
	return &this
}

// GetArtefactName returns the ArtefactName field value
func (o *ScriptArtefactCharactersDTO) GetArtefactName() string {
	if o == nil  {
		var ret string
		return ret
	}

	return o.ArtefactName
}

// GetArtefactNameOk returns a tuple with the ArtefactName field value
// and a boolean to check if the value has been set.
func (o *ScriptArtefactCharactersDTO) GetArtefactNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.ArtefactName, true
}

// SetArtefactName sets field value
func (o *ScriptArtefactCharactersDTO) SetArtefactName(v string) {
	o.ArtefactName = v
}

// GetArtefactId returns the ArtefactId field value
func (o *ScriptArtefactCharactersDTO) GetArtefactId() int32 {
	if o == nil  {
		var ret int32
		return ret
	}

	return o.ArtefactId
}

// GetArtefactIdOk returns a tuple with the ArtefactId field value
// and a boolean to check if the value has been set.
func (o *ScriptArtefactCharactersDTO) GetArtefactIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.ArtefactId, true
}

// SetArtefactId sets field value
func (o *ScriptArtefactCharactersDTO) SetArtefactId(v int32) {
	o.ArtefactId = v
}

// GetPlacement returns the Placement field value
func (o *ScriptArtefactCharactersDTO) GetPlacement() PlacementDTO {
	if o == nil  {
		var ret PlacementDTO
		return ret
	}

	return o.Placement
}

// GetPlacementOk returns a tuple with the Placement field value
// and a boolean to check if the value has been set.
func (o *ScriptArtefactCharactersDTO) GetPlacementOk() (*PlacementDTO, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Placement, true
}

// SetPlacement sets field value
func (o *ScriptArtefactCharactersDTO) SetPlacement(v PlacementDTO) {
	o.Placement = v
}

// GetCharacters returns the Characters field value
func (o *ScriptArtefactCharactersDTO) GetCharacters() []SignInterpretationDTO {
	if o == nil  {
		var ret []SignInterpretationDTO
		return ret
	}

	return o.Characters
}

// GetCharactersOk returns a tuple with the Characters field value
// and a boolean to check if the value has been set.
func (o *ScriptArtefactCharactersDTO) GetCharactersOk() (*[]SignInterpretationDTO, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Characters, true
}

// SetCharacters sets field value
func (o *ScriptArtefactCharactersDTO) SetCharacters(v []SignInterpretationDTO) {
	o.Characters = v
}

func (o ScriptArtefactCharactersDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["artefactName"] = o.ArtefactName
	}
	if true {
		toSerialize["artefactId"] = o.ArtefactId
	}
	if true {
		toSerialize["placement"] = o.Placement
	}
	if true {
		toSerialize["characters"] = o.Characters
	}
	return json.Marshal(toSerialize)
}

type NullableScriptArtefactCharactersDTO struct {
	value *ScriptArtefactCharactersDTO
	isSet bool
}

func (v NullableScriptArtefactCharactersDTO) Get() *ScriptArtefactCharactersDTO {
	return v.value
}

func (v *NullableScriptArtefactCharactersDTO) Set(val *ScriptArtefactCharactersDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableScriptArtefactCharactersDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableScriptArtefactCharactersDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableScriptArtefactCharactersDTO(val *ScriptArtefactCharactersDTO) *NullableScriptArtefactCharactersDTO {
	return &NullableScriptArtefactCharactersDTO{value: val, isSet: true}
}

func (v NullableScriptArtefactCharactersDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableScriptArtefactCharactersDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

