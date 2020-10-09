# TextFragmentDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TextFragmentId** | **int32** |  | 
**TextFragmentName** | **string** |  | 
**EditorId** | **int32** |  | 
**Lines** | [**[]LineDTO**](LineDTO.md) |  | 

## Methods

### NewTextFragmentDTO

`func NewTextFragmentDTO(textFragmentId int32, textFragmentName string, editorId int32, lines []LineDTO, ) *TextFragmentDTO`

NewTextFragmentDTO instantiates a new TextFragmentDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTextFragmentDTOWithDefaults

`func NewTextFragmentDTOWithDefaults() *TextFragmentDTO`

NewTextFragmentDTOWithDefaults instantiates a new TextFragmentDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTextFragmentId

`func (o *TextFragmentDTO) GetTextFragmentId() int32`

GetTextFragmentId returns the TextFragmentId field if non-nil, zero value otherwise.

### GetTextFragmentIdOk

`func (o *TextFragmentDTO) GetTextFragmentIdOk() (*int32, bool)`

GetTextFragmentIdOk returns a tuple with the TextFragmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextFragmentId

`func (o *TextFragmentDTO) SetTextFragmentId(v int32)`

SetTextFragmentId sets TextFragmentId field to given value.


### GetTextFragmentName

`func (o *TextFragmentDTO) GetTextFragmentName() string`

GetTextFragmentName returns the TextFragmentName field if non-nil, zero value otherwise.

### GetTextFragmentNameOk

`func (o *TextFragmentDTO) GetTextFragmentNameOk() (*string, bool)`

GetTextFragmentNameOk returns a tuple with the TextFragmentName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextFragmentName

`func (o *TextFragmentDTO) SetTextFragmentName(v string)`

SetTextFragmentName sets TextFragmentName field to given value.


### GetEditorId

`func (o *TextFragmentDTO) GetEditorId() int32`

GetEditorId returns the EditorId field if non-nil, zero value otherwise.

### GetEditorIdOk

`func (o *TextFragmentDTO) GetEditorIdOk() (*int32, bool)`

GetEditorIdOk returns a tuple with the EditorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditorId

`func (o *TextFragmentDTO) SetEditorId(v int32)`

SetEditorId sets EditorId field to given value.


### GetLines

`func (o *TextFragmentDTO) GetLines() []LineDTO`

GetLines returns the Lines field if non-nil, zero value otherwise.

### GetLinesOk

`func (o *TextFragmentDTO) GetLinesOk() (*[]LineDTO, bool)`

GetLinesOk returns a tuple with the Lines field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLines

`func (o *TextFragmentDTO) SetLines(v []LineDTO)`

SetLines sets Lines field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


