# LineTextDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Licence** | **string** |  | 
**Editors** | [**map[string]EditorDTO**](EditorDTO.md) |  | 
**LineId** | **int32** |  | 
**LineName** | **string** |  | 
**EditorId** | **int32** |  | 
**Signs** | [**[]SignDTO**](SignDTO.md) |  | 

## Methods

### NewLineTextDTO

`func NewLineTextDTO(licence string, editors map[string]EditorDTO, lineId int32, lineName string, editorId int32, signs []SignDTO, ) *LineTextDTO`

NewLineTextDTO instantiates a new LineTextDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLineTextDTOWithDefaults

`func NewLineTextDTOWithDefaults() *LineTextDTO`

NewLineTextDTOWithDefaults instantiates a new LineTextDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLicence

`func (o *LineTextDTO) GetLicence() string`

GetLicence returns the Licence field if non-nil, zero value otherwise.

### GetLicenceOk

`func (o *LineTextDTO) GetLicenceOk() (*string, bool)`

GetLicenceOk returns a tuple with the Licence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLicence

`func (o *LineTextDTO) SetLicence(v string)`

SetLicence sets Licence field to given value.


### GetEditors

`func (o *LineTextDTO) GetEditors() map[string]EditorDTO`

GetEditors returns the Editors field if non-nil, zero value otherwise.

### GetEditorsOk

`func (o *LineTextDTO) GetEditorsOk() (*map[string]EditorDTO, bool)`

GetEditorsOk returns a tuple with the Editors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditors

`func (o *LineTextDTO) SetEditors(v map[string]EditorDTO)`

SetEditors sets Editors field to given value.


### GetLineId

`func (o *LineTextDTO) GetLineId() int32`

GetLineId returns the LineId field if non-nil, zero value otherwise.

### GetLineIdOk

`func (o *LineTextDTO) GetLineIdOk() (*int32, bool)`

GetLineIdOk returns a tuple with the LineId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineId

`func (o *LineTextDTO) SetLineId(v int32)`

SetLineId sets LineId field to given value.


### GetLineName

`func (o *LineTextDTO) GetLineName() string`

GetLineName returns the LineName field if non-nil, zero value otherwise.

### GetLineNameOk

`func (o *LineTextDTO) GetLineNameOk() (*string, bool)`

GetLineNameOk returns a tuple with the LineName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineName

`func (o *LineTextDTO) SetLineName(v string)`

SetLineName sets LineName field to given value.


### GetEditorId

`func (o *LineTextDTO) GetEditorId() int32`

GetEditorId returns the EditorId field if non-nil, zero value otherwise.

### GetEditorIdOk

`func (o *LineTextDTO) GetEditorIdOk() (*int32, bool)`

GetEditorIdOk returns a tuple with the EditorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditorId

`func (o *LineTextDTO) SetEditorId(v int32)`

SetEditorId sets EditorId field to given value.


### GetSigns

`func (o *LineTextDTO) GetSigns() []SignDTO`

GetSigns returns the Signs field if non-nil, zero value otherwise.

### GetSignsOk

`func (o *LineTextDTO) GetSignsOk() (*[]SignDTO, bool)`

GetSignsOk returns a tuple with the Signs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigns

`func (o *LineTextDTO) SetSigns(v []SignDTO)`

SetSigns sets Signs field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


