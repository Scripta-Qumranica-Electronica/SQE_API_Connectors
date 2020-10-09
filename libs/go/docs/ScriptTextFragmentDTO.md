# ScriptTextFragmentDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TextFragmentName** | **string** |  | 
**TextFragmentId** | **int32** |  | 
**Lines** | [**[]ScriptLineDTO**](ScriptLineDTO.md) |  | 

## Methods

### NewScriptTextFragmentDTO

`func NewScriptTextFragmentDTO(textFragmentName string, textFragmentId int32, lines []ScriptLineDTO, ) *ScriptTextFragmentDTO`

NewScriptTextFragmentDTO instantiates a new ScriptTextFragmentDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScriptTextFragmentDTOWithDefaults

`func NewScriptTextFragmentDTOWithDefaults() *ScriptTextFragmentDTO`

NewScriptTextFragmentDTOWithDefaults instantiates a new ScriptTextFragmentDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTextFragmentName

`func (o *ScriptTextFragmentDTO) GetTextFragmentName() string`

GetTextFragmentName returns the TextFragmentName field if non-nil, zero value otherwise.

### GetTextFragmentNameOk

`func (o *ScriptTextFragmentDTO) GetTextFragmentNameOk() (*string, bool)`

GetTextFragmentNameOk returns a tuple with the TextFragmentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextFragmentName

`func (o *ScriptTextFragmentDTO) SetTextFragmentName(v string)`

SetTextFragmentName sets TextFragmentName field to given value.


### GetTextFragmentId

`func (o *ScriptTextFragmentDTO) GetTextFragmentId() int32`

GetTextFragmentId returns the TextFragmentId field if non-nil, zero value otherwise.

### GetTextFragmentIdOk

`func (o *ScriptTextFragmentDTO) GetTextFragmentIdOk() (*int32, bool)`

GetTextFragmentIdOk returns a tuple with the TextFragmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextFragmentId

`func (o *ScriptTextFragmentDTO) SetTextFragmentId(v int32)`

SetTextFragmentId sets TextFragmentId field to given value.


### GetLines

`func (o *ScriptTextFragmentDTO) GetLines() []ScriptLineDTO`

GetLines returns the Lines field if non-nil, zero value otherwise.

### GetLinesOk

`func (o *ScriptTextFragmentDTO) GetLinesOk() (*[]ScriptLineDTO, bool)`

GetLinesOk returns a tuple with the Lines field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLines

`func (o *ScriptTextFragmentDTO) SetLines(v []ScriptLineDTO)`

SetLines sets Lines field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


