# ScriptLineDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LineName** | **string** |  | 
**LineId** | **int32** |  | 
**Artefacts** | [**[]ScriptArtefactCharactersDTO**](ScriptArtefactCharactersDTO.md) |  | 

## Methods

### NewScriptLineDTO

`func NewScriptLineDTO(lineName string, lineId int32, artefacts []ScriptArtefactCharactersDTO, ) *ScriptLineDTO`

NewScriptLineDTO instantiates a new ScriptLineDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScriptLineDTOWithDefaults

`func NewScriptLineDTOWithDefaults() *ScriptLineDTO`

NewScriptLineDTOWithDefaults instantiates a new ScriptLineDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLineName

`func (o *ScriptLineDTO) GetLineName() string`

GetLineName returns the LineName field if non-nil, zero value otherwise.

### GetLineNameOk

`func (o *ScriptLineDTO) GetLineNameOk() (*string, bool)`

GetLineNameOk returns a tuple with the LineName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineName

`func (o *ScriptLineDTO) SetLineName(v string)`

SetLineName sets LineName field to given value.


### GetLineId

`func (o *ScriptLineDTO) GetLineId() int32`

GetLineId returns the LineId field if non-nil, zero value otherwise.

### GetLineIdOk

`func (o *ScriptLineDTO) GetLineIdOk() (*int32, bool)`

GetLineIdOk returns a tuple with the LineId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineId

`func (o *ScriptLineDTO) SetLineId(v int32)`

SetLineId sets LineId field to given value.


### GetArtefacts

`func (o *ScriptLineDTO) GetArtefacts() []ScriptArtefactCharactersDTO`

GetArtefacts returns the Artefacts field if non-nil, zero value otherwise.

### GetArtefactsOk

`func (o *ScriptLineDTO) GetArtefactsOk() (*[]ScriptArtefactCharactersDTO, bool)`

GetArtefactsOk returns a tuple with the Artefacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArtefacts

`func (o *ScriptLineDTO) SetArtefacts(v []ScriptArtefactCharactersDTO)`

SetArtefacts sets Artefacts field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


