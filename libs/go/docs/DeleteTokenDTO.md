# DeleteTokenDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EditionId** | **int32** |  | 
**Token** | **string** |  | 

## Methods

### NewDeleteTokenDTO

`func NewDeleteTokenDTO(editionId int32, token string, ) *DeleteTokenDTO`

NewDeleteTokenDTO instantiates a new DeleteTokenDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteTokenDTOWithDefaults

`func NewDeleteTokenDTOWithDefaults() *DeleteTokenDTO`

NewDeleteTokenDTOWithDefaults instantiates a new DeleteTokenDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEditionId

`func (o *DeleteTokenDTO) GetEditionId() int32`

GetEditionId returns the EditionId field if non-nil, zero value otherwise.

### GetEditionIdOk

`func (o *DeleteTokenDTO) GetEditionIdOk() (*int32, bool)`

GetEditionIdOk returns a tuple with the EditionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionId

`func (o *DeleteTokenDTO) SetEditionId(v int32)`

SetEditionId sets EditionId field to given value.


### GetToken

`func (o *DeleteTokenDTO) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *DeleteTokenDTO) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *DeleteTokenDTO) SetToken(v string)`

SetToken sets Token field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


