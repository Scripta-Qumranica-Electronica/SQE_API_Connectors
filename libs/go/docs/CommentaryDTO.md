# CommentaryDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatorId** | **int32** |  | 
**EditorId** | **int32** |  | 
**Commentary** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewCommentaryDTO

`func NewCommentaryDTO(creatorId int32, editorId int32, ) *CommentaryDTO`

NewCommentaryDTO instantiates a new CommentaryDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommentaryDTOWithDefaults

`func NewCommentaryDTOWithDefaults() *CommentaryDTO`

NewCommentaryDTOWithDefaults instantiates a new CommentaryDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatorId

`func (o *CommentaryDTO) GetCreatorId() int32`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *CommentaryDTO) GetCreatorIdOk() (*int32, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *CommentaryDTO) SetCreatorId(v int32)`

SetCreatorId sets CreatorId field to given value.


### GetEditorId

`func (o *CommentaryDTO) GetEditorId() int32`

GetEditorId returns the EditorId field if non-nil, zero value otherwise.

### GetEditorIdOk

`func (o *CommentaryDTO) GetEditorIdOk() (*int32, bool)`

GetEditorIdOk returns a tuple with the EditorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditorId

`func (o *CommentaryDTO) SetEditorId(v int32)`

SetEditorId sets EditorId field to given value.


### GetCommentary

`func (o *CommentaryDTO) GetCommentary() string`

GetCommentary returns the Commentary field if non-nil, zero value otherwise.

### GetCommentaryOk

`func (o *CommentaryDTO) GetCommentaryOk() (*string, bool)`

GetCommentaryOk returns a tuple with the Commentary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentary

`func (o *CommentaryDTO) SetCommentary(v string)`

SetCommentary sets Commentary field to given value.

### HasCommentary

`func (o *CommentaryDTO) HasCommentary() bool`

HasCommentary returns a boolean if a field has been set.

### SetCommentaryNil

`func (o *CommentaryDTO) SetCommentaryNil(b bool)`

 SetCommentaryNil sets the value for Commentary to be an explicit nil

### UnsetCommentary
`func (o *CommentaryDTO) UnsetCommentary()`

UnsetCommentary ensures that no value is present for Commentary, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


