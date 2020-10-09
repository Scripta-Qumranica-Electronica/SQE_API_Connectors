# ScriptArtefactCharactersDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArtefactName** | **string** |  | 
**ArtefactId** | **int32** |  | 
**Placement** | [**PlacementDTO**](PlacementDTO.md) |  | 
**Characters** | [**[]SignInterpretationDTO**](SignInterpretationDTO.md) |  | 

## Methods

### NewScriptArtefactCharactersDTO

`func NewScriptArtefactCharactersDTO(artefactName string, artefactId int32, placement PlacementDTO, characters []SignInterpretationDTO, ) *ScriptArtefactCharactersDTO`

NewScriptArtefactCharactersDTO instantiates a new ScriptArtefactCharactersDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScriptArtefactCharactersDTOWithDefaults

`func NewScriptArtefactCharactersDTOWithDefaults() *ScriptArtefactCharactersDTO`

NewScriptArtefactCharactersDTOWithDefaults instantiates a new ScriptArtefactCharactersDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArtefactName

`func (o *ScriptArtefactCharactersDTO) GetArtefactName() string`

GetArtefactName returns the ArtefactName field if non-nil, zero value otherwise.

### GetArtefactNameOk

`func (o *ScriptArtefactCharactersDTO) GetArtefactNameOk() (*string, bool)`

GetArtefactNameOk returns a tuple with the ArtefactName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArtefactName

`func (o *ScriptArtefactCharactersDTO) SetArtefactName(v string)`

SetArtefactName sets ArtefactName field to given value.


### GetArtefactId

`func (o *ScriptArtefactCharactersDTO) GetArtefactId() int32`

GetArtefactId returns the ArtefactId field if non-nil, zero value otherwise.

### GetArtefactIdOk

`func (o *ScriptArtefactCharactersDTO) GetArtefactIdOk() (*int32, bool)`

GetArtefactIdOk returns a tuple with the ArtefactId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArtefactId

`func (o *ScriptArtefactCharactersDTO) SetArtefactId(v int32)`

SetArtefactId sets ArtefactId field to given value.


### GetPlacement

`func (o *ScriptArtefactCharactersDTO) GetPlacement() PlacementDTO`

GetPlacement returns the Placement field if non-nil, zero value otherwise.

### GetPlacementOk

`func (o *ScriptArtefactCharactersDTO) GetPlacementOk() (*PlacementDTO, bool)`

GetPlacementOk returns a tuple with the Placement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlacement

`func (o *ScriptArtefactCharactersDTO) SetPlacement(v PlacementDTO)`

SetPlacement sets Placement field to given value.


### GetCharacters

`func (o *ScriptArtefactCharactersDTO) GetCharacters() []SignInterpretationDTO`

GetCharacters returns the Characters field if non-nil, zero value otherwise.

### GetCharactersOk

`func (o *ScriptArtefactCharactersDTO) GetCharactersOk() (*[]SignInterpretationDTO, bool)`

GetCharactersOk returns a tuple with the Characters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharacters

`func (o *ScriptArtefactCharactersDTO) SetCharacters(v []SignInterpretationDTO)`

SetCharacters sets Characters field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


