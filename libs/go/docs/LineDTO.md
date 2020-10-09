# LineDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LineId** | **int32** |  | 
**LineName** | **string** |  | 
**EditorId** | **int32** |  | 
**Signs** | [**[]SignDTO**](SignDTO.md) |  | 

## Methods

### NewLineDTO

`func NewLineDTO(lineId int32, lineName string, editorId int32, signs []SignDTO, ) *LineDTO`

NewLineDTO instantiates a new LineDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLineDTOWithDefaults

`func NewLineDTOWithDefaults() *LineDTO`

NewLineDTOWithDefaults instantiates a new LineDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLineId

`func (o *LineDTO) GetLineId() int32`

GetLineId returns the LineId field if non-nil, zero value otherwise.

### GetLineIdOk

`func (o *LineDTO) GetLineIdOk() (*int32, bool)`

GetLineIdOk returns a tuple with the LineId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineId

`func (o *LineDTO) SetLineId(v int32)`

SetLineId sets LineId field to given value.


### GetLineName

`func (o *LineDTO) GetLineName() string`

GetLineName returns the LineName field if non-nil, zero value otherwise.

### GetLineNameOk

`func (o *LineDTO) GetLineNameOk() (*string, bool)`

GetLineNameOk returns a tuple with the LineName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineName

`func (o *LineDTO) SetLineName(v string)`

SetLineName sets LineName field to given value.


### GetEditorId

`func (o *LineDTO) GetEditorId() int32`

GetEditorId returns the EditorId field if non-nil, zero value otherwise.

### GetEditorIdOk

`func (o *LineDTO) GetEditorIdOk() (*int32, bool)`

GetEditorIdOk returns a tuple with the EditorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditorId

`func (o *LineDTO) SetEditorId(v int32)`

SetEditorId sets EditorId field to given value.


### GetSigns

`func (o *LineDTO) GetSigns() []SignDTO`

GetSigns returns the Signs field if non-nil, zero value otherwise.

### GetSignsOk

`func (o *LineDTO) GetSignsOk() (*[]SignDTO, bool)`

GetSignsOk returns a tuple with the Signs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigns

`func (o *LineDTO) SetSigns(v []SignDTO)`

SetSigns sets Signs field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


