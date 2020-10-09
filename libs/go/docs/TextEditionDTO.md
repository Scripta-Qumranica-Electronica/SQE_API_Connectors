# TextEditionDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ManuscriptId** | **int32** |  | 
**EditionName** | **string** |  | 
**EditorId** | **int32** |  | 
**Licence** | **string** |  | 
**Editors** | [**map[string]EditorDTO**](EditorDTO.md) |  | 
**TextFragments** | [**[]TextFragmentDTO**](TextFragmentDTO.md) |  | 

## Methods

### NewTextEditionDTO

`func NewTextEditionDTO(manuscriptId int32, editionName string, editorId int32, licence string, editors map[string]EditorDTO, textFragments []TextFragmentDTO, ) *TextEditionDTO`

NewTextEditionDTO instantiates a new TextEditionDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTextEditionDTOWithDefaults

`func NewTextEditionDTOWithDefaults() *TextEditionDTO`

NewTextEditionDTOWithDefaults instantiates a new TextEditionDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetManuscriptId

`func (o *TextEditionDTO) GetManuscriptId() int32`

GetManuscriptId returns the ManuscriptId field if non-nil, zero value otherwise.

### GetManuscriptIdOk

`func (o *TextEditionDTO) GetManuscriptIdOk() (*int32, bool)`

GetManuscriptIdOk returns a tuple with the ManuscriptId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuscriptId

`func (o *TextEditionDTO) SetManuscriptId(v int32)`

SetManuscriptId sets ManuscriptId field to given value.


### GetEditionName

`func (o *TextEditionDTO) GetEditionName() string`

GetEditionName returns the EditionName field if non-nil, zero value otherwise.

### GetEditionNameOk

`func (o *TextEditionDTO) GetEditionNameOk() (*string, bool)`

GetEditionNameOk returns a tuple with the EditionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionName

`func (o *TextEditionDTO) SetEditionName(v string)`

SetEditionName sets EditionName field to given value.


### GetEditorId

`func (o *TextEditionDTO) GetEditorId() int32`

GetEditorId returns the EditorId field if non-nil, zero value otherwise.

### GetEditorIdOk

`func (o *TextEditionDTO) GetEditorIdOk() (*int32, bool)`

GetEditorIdOk returns a tuple with the EditorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditorId

`func (o *TextEditionDTO) SetEditorId(v int32)`

SetEditorId sets EditorId field to given value.


### GetLicence

`func (o *TextEditionDTO) GetLicence() string`

GetLicence returns the Licence field if non-nil, zero value otherwise.

### GetLicenceOk

`func (o *TextEditionDTO) GetLicenceOk() (*string, bool)`

GetLicenceOk returns a tuple with the Licence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLicence

`func (o *TextEditionDTO) SetLicence(v string)`

SetLicence sets Licence field to given value.


### GetEditors

`func (o *TextEditionDTO) GetEditors() map[string]EditorDTO`

GetEditors returns the Editors field if non-nil, zero value otherwise.

### GetEditorsOk

`func (o *TextEditionDTO) GetEditorsOk() (*map[string]EditorDTO, bool)`

GetEditorsOk returns a tuple with the Editors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditors

`func (o *TextEditionDTO) SetEditors(v map[string]EditorDTO)`

SetEditors sets Editors field to given value.


### GetTextFragments

`func (o *TextEditionDTO) GetTextFragments() []TextFragmentDTO`

GetTextFragments returns the TextFragments field if non-nil, zero value otherwise.

### GetTextFragmentsOk

`func (o *TextEditionDTO) GetTextFragmentsOk() (*[]TextFragmentDTO, bool)`

GetTextFragmentsOk returns a tuple with the TextFragments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextFragments

`func (o *TextEditionDTO) SetTextFragments(v []TextFragmentDTO)`

SetTextFragments sets TextFragments field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


