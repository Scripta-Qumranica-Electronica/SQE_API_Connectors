# CatalogueMatchDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ImageCatalogId** | **int32** |  | 
**Institution** | **string** |  | 
**CatalogueNumber1** | **string** |  | 
**CatalogueNumber2** | Pointer to **NullableString** |  | [optional] 
**Proxy** | Pointer to **NullableString** |  | [optional] 
**Url** | **string** |  | 
**Filename** | **string** |  | 
**Suffix** | **string** |  | 
**Thumbnail** | **string** |  | 
**License** | **string** |  | 
**IaaEditionCatalogueId** | **int32** |  | 
**ManuscriptName** | **string** |  | 
**Name** | **string** |  | 
**MatchAuthor** | **string** |  | 
**MatchConfirmationAuthor** | Pointer to **NullableString** |  | [optional] 
**MatchId** | **int32** |  | 
**DateOfMatch** | [**time.Time**](time.Time.md) |  | 
**DateOfConfirmation** | Pointer to [**NullableTime**](time.Time.md) |  | [optional] 
**CatalogSide** | Pointer to [**SideDesignation**](SideDesignation.md) |  | [optional] 
**ImagedObjectId** | **string** |  | 
**ManuscriptId** | **int32** |  | 
**EditionName** | **string** |  | 
**EditionVolume** | **string** |  | 
**EditionLocation1** | **string** |  | 
**EditionLocation2** | **string** |  | 
**EditionSide** | [**SideDesignation**](SideDesignation.md) |  | 
**Comment** | Pointer to **NullableString** |  | [optional] 
**TextFragmentId** | **int32** |  | 
**EditionId** | **int32** |  | 
**Confirmed** | Pointer to **NullableBool** |  | [optional] 

## Methods

### NewCatalogueMatchDTO

`func NewCatalogueMatchDTO(imageCatalogId int32, institution string, catalogueNumber1 string, url string, filename string, suffix string, thumbnail string, license string, iaaEditionCatalogueId int32, manuscriptName string, name string, matchAuthor string, matchId int32, dateOfMatch time.Time, imagedObjectId string, manuscriptId int32, editionName string, editionVolume string, editionLocation1 string, editionLocation2 string, editionSide SideDesignation, textFragmentId int32, editionId int32, ) *CatalogueMatchDTO`

NewCatalogueMatchDTO instantiates a new CatalogueMatchDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCatalogueMatchDTOWithDefaults

`func NewCatalogueMatchDTOWithDefaults() *CatalogueMatchDTO`

NewCatalogueMatchDTOWithDefaults instantiates a new CatalogueMatchDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetImageCatalogId

`func (o *CatalogueMatchDTO) GetImageCatalogId() int32`

GetImageCatalogId returns the ImageCatalogId field if non-nil, zero value otherwise.

### GetImageCatalogIdOk

`func (o *CatalogueMatchDTO) GetImageCatalogIdOk() (*int32, bool)`

GetImageCatalogIdOk returns a tuple with the ImageCatalogId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageCatalogId

`func (o *CatalogueMatchDTO) SetImageCatalogId(v int32)`

SetImageCatalogId sets ImageCatalogId field to given value.


### GetInstitution

`func (o *CatalogueMatchDTO) GetInstitution() string`

GetInstitution returns the Institution field if non-nil, zero value otherwise.

### GetInstitutionOk

`func (o *CatalogueMatchDTO) GetInstitutionOk() (*string, bool)`

GetInstitutionOk returns a tuple with the Institution field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstitution

`func (o *CatalogueMatchDTO) SetInstitution(v string)`

SetInstitution sets Institution field to given value.


### GetCatalogueNumber1

`func (o *CatalogueMatchDTO) GetCatalogueNumber1() string`

GetCatalogueNumber1 returns the CatalogueNumber1 field if non-nil, zero value otherwise.

### GetCatalogueNumber1Ok

`func (o *CatalogueMatchDTO) GetCatalogueNumber1Ok() (*string, bool)`

GetCatalogueNumber1Ok returns a tuple with the CatalogueNumber1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalogueNumber1

`func (o *CatalogueMatchDTO) SetCatalogueNumber1(v string)`

SetCatalogueNumber1 sets CatalogueNumber1 field to given value.


### GetCatalogueNumber2

`func (o *CatalogueMatchDTO) GetCatalogueNumber2() string`

GetCatalogueNumber2 returns the CatalogueNumber2 field if non-nil, zero value otherwise.

### GetCatalogueNumber2Ok

`func (o *CatalogueMatchDTO) GetCatalogueNumber2Ok() (*string, bool)`

GetCatalogueNumber2Ok returns a tuple with the CatalogueNumber2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalogueNumber2

`func (o *CatalogueMatchDTO) SetCatalogueNumber2(v string)`

SetCatalogueNumber2 sets CatalogueNumber2 field to given value.

### HasCatalogueNumber2

`func (o *CatalogueMatchDTO) HasCatalogueNumber2() bool`

HasCatalogueNumber2 returns a boolean if a field has been set.

### SetCatalogueNumber2Nil

`func (o *CatalogueMatchDTO) SetCatalogueNumber2Nil(b bool)`

 SetCatalogueNumber2Nil sets the value for CatalogueNumber2 to be an explicit nil

### UnsetCatalogueNumber2
`func (o *CatalogueMatchDTO) UnsetCatalogueNumber2()`

UnsetCatalogueNumber2 ensures that no value is present for CatalogueNumber2, not even an explicit nil
### GetProxy

`func (o *CatalogueMatchDTO) GetProxy() string`

GetProxy returns the Proxy field if non-nil, zero value otherwise.

### GetProxyOk

`func (o *CatalogueMatchDTO) GetProxyOk() (*string, bool)`

GetProxyOk returns a tuple with the Proxy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProxy

`func (o *CatalogueMatchDTO) SetProxy(v string)`

SetProxy sets Proxy field to given value.

### HasProxy

`func (o *CatalogueMatchDTO) HasProxy() bool`

HasProxy returns a boolean if a field has been set.

### SetProxyNil

`func (o *CatalogueMatchDTO) SetProxyNil(b bool)`

 SetProxyNil sets the value for Proxy to be an explicit nil

### UnsetProxy
`func (o *CatalogueMatchDTO) UnsetProxy()`

UnsetProxy ensures that no value is present for Proxy, not even an explicit nil
### GetUrl

`func (o *CatalogueMatchDTO) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *CatalogueMatchDTO) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *CatalogueMatchDTO) SetUrl(v string)`

SetUrl sets Url field to given value.


### GetFilename

`func (o *CatalogueMatchDTO) GetFilename() string`

GetFilename returns the Filename field if non-nil, zero value otherwise.

### GetFilenameOk

`func (o *CatalogueMatchDTO) GetFilenameOk() (*string, bool)`

GetFilenameOk returns a tuple with the Filename field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilename

`func (o *CatalogueMatchDTO) SetFilename(v string)`

SetFilename sets Filename field to given value.


### GetSuffix

`func (o *CatalogueMatchDTO) GetSuffix() string`

GetSuffix returns the Suffix field if non-nil, zero value otherwise.

### GetSuffixOk

`func (o *CatalogueMatchDTO) GetSuffixOk() (*string, bool)`

GetSuffixOk returns a tuple with the Suffix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuffix

`func (o *CatalogueMatchDTO) SetSuffix(v string)`

SetSuffix sets Suffix field to given value.


### GetThumbnail

`func (o *CatalogueMatchDTO) GetThumbnail() string`

GetThumbnail returns the Thumbnail field if non-nil, zero value otherwise.

### GetThumbnailOk

`func (o *CatalogueMatchDTO) GetThumbnailOk() (*string, bool)`

GetThumbnailOk returns a tuple with the Thumbnail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThumbnail

`func (o *CatalogueMatchDTO) SetThumbnail(v string)`

SetThumbnail sets Thumbnail field to given value.


### GetLicense

`func (o *CatalogueMatchDTO) GetLicense() string`

GetLicense returns the License field if non-nil, zero value otherwise.

### GetLicenseOk

`func (o *CatalogueMatchDTO) GetLicenseOk() (*string, bool)`

GetLicenseOk returns a tuple with the License field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLicense

`func (o *CatalogueMatchDTO) SetLicense(v string)`

SetLicense sets License field to given value.


### GetIaaEditionCatalogueId

`func (o *CatalogueMatchDTO) GetIaaEditionCatalogueId() int32`

GetIaaEditionCatalogueId returns the IaaEditionCatalogueId field if non-nil, zero value otherwise.

### GetIaaEditionCatalogueIdOk

`func (o *CatalogueMatchDTO) GetIaaEditionCatalogueIdOk() (*int32, bool)`

GetIaaEditionCatalogueIdOk returns a tuple with the IaaEditionCatalogueId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIaaEditionCatalogueId

`func (o *CatalogueMatchDTO) SetIaaEditionCatalogueId(v int32)`

SetIaaEditionCatalogueId sets IaaEditionCatalogueId field to given value.


### GetManuscriptName

`func (o *CatalogueMatchDTO) GetManuscriptName() string`

GetManuscriptName returns the ManuscriptName field if non-nil, zero value otherwise.

### GetManuscriptNameOk

`func (o *CatalogueMatchDTO) GetManuscriptNameOk() (*string, bool)`

GetManuscriptNameOk returns a tuple with the ManuscriptName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuscriptName

`func (o *CatalogueMatchDTO) SetManuscriptName(v string)`

SetManuscriptName sets ManuscriptName field to given value.


### GetName

`func (o *CatalogueMatchDTO) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CatalogueMatchDTO) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CatalogueMatchDTO) SetName(v string)`

SetName sets Name field to given value.


### GetMatchAuthor

`func (o *CatalogueMatchDTO) GetMatchAuthor() string`

GetMatchAuthor returns the MatchAuthor field if non-nil, zero value otherwise.

### GetMatchAuthorOk

`func (o *CatalogueMatchDTO) GetMatchAuthorOk() (*string, bool)`

GetMatchAuthorOk returns a tuple with the MatchAuthor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchAuthor

`func (o *CatalogueMatchDTO) SetMatchAuthor(v string)`

SetMatchAuthor sets MatchAuthor field to given value.


### GetMatchConfirmationAuthor

`func (o *CatalogueMatchDTO) GetMatchConfirmationAuthor() string`

GetMatchConfirmationAuthor returns the MatchConfirmationAuthor field if non-nil, zero value otherwise.

### GetMatchConfirmationAuthorOk

`func (o *CatalogueMatchDTO) GetMatchConfirmationAuthorOk() (*string, bool)`

GetMatchConfirmationAuthorOk returns a tuple with the MatchConfirmationAuthor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchConfirmationAuthor

`func (o *CatalogueMatchDTO) SetMatchConfirmationAuthor(v string)`

SetMatchConfirmationAuthor sets MatchConfirmationAuthor field to given value.

### HasMatchConfirmationAuthor

`func (o *CatalogueMatchDTO) HasMatchConfirmationAuthor() bool`

HasMatchConfirmationAuthor returns a boolean if a field has been set.

### SetMatchConfirmationAuthorNil

`func (o *CatalogueMatchDTO) SetMatchConfirmationAuthorNil(b bool)`

 SetMatchConfirmationAuthorNil sets the value for MatchConfirmationAuthor to be an explicit nil

### UnsetMatchConfirmationAuthor
`func (o *CatalogueMatchDTO) UnsetMatchConfirmationAuthor()`

UnsetMatchConfirmationAuthor ensures that no value is present for MatchConfirmationAuthor, not even an explicit nil
### GetMatchId

`func (o *CatalogueMatchDTO) GetMatchId() int32`

GetMatchId returns the MatchId field if non-nil, zero value otherwise.

### GetMatchIdOk

`func (o *CatalogueMatchDTO) GetMatchIdOk() (*int32, bool)`

GetMatchIdOk returns a tuple with the MatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchId

`func (o *CatalogueMatchDTO) SetMatchId(v int32)`

SetMatchId sets MatchId field to given value.


### GetDateOfMatch

`func (o *CatalogueMatchDTO) GetDateOfMatch() time.Time`

GetDateOfMatch returns the DateOfMatch field if non-nil, zero value otherwise.

### GetDateOfMatchOk

`func (o *CatalogueMatchDTO) GetDateOfMatchOk() (*time.Time, bool)`

GetDateOfMatchOk returns a tuple with the DateOfMatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateOfMatch

`func (o *CatalogueMatchDTO) SetDateOfMatch(v time.Time)`

SetDateOfMatch sets DateOfMatch field to given value.


### GetDateOfConfirmation

`func (o *CatalogueMatchDTO) GetDateOfConfirmation() time.Time`

GetDateOfConfirmation returns the DateOfConfirmation field if non-nil, zero value otherwise.

### GetDateOfConfirmationOk

`func (o *CatalogueMatchDTO) GetDateOfConfirmationOk() (*time.Time, bool)`

GetDateOfConfirmationOk returns a tuple with the DateOfConfirmation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateOfConfirmation

`func (o *CatalogueMatchDTO) SetDateOfConfirmation(v time.Time)`

SetDateOfConfirmation sets DateOfConfirmation field to given value.

### HasDateOfConfirmation

`func (o *CatalogueMatchDTO) HasDateOfConfirmation() bool`

HasDateOfConfirmation returns a boolean if a field has been set.

### SetDateOfConfirmationNil

`func (o *CatalogueMatchDTO) SetDateOfConfirmationNil(b bool)`

 SetDateOfConfirmationNil sets the value for DateOfConfirmation to be an explicit nil

### UnsetDateOfConfirmation
`func (o *CatalogueMatchDTO) UnsetDateOfConfirmation()`

UnsetDateOfConfirmation ensures that no value is present for DateOfConfirmation, not even an explicit nil
### GetCatalogSide

`func (o *CatalogueMatchDTO) GetCatalogSide() SideDesignation`

GetCatalogSide returns the CatalogSide field if non-nil, zero value otherwise.

### GetCatalogSideOk

`func (o *CatalogueMatchDTO) GetCatalogSideOk() (*SideDesignation, bool)`

GetCatalogSideOk returns a tuple with the CatalogSide field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalogSide

`func (o *CatalogueMatchDTO) SetCatalogSide(v SideDesignation)`

SetCatalogSide sets CatalogSide field to given value.

### HasCatalogSide

`func (o *CatalogueMatchDTO) HasCatalogSide() bool`

HasCatalogSide returns a boolean if a field has been set.

### GetImagedObjectId

`func (o *CatalogueMatchDTO) GetImagedObjectId() string`

GetImagedObjectId returns the ImagedObjectId field if non-nil, zero value otherwise.

### GetImagedObjectIdOk

`func (o *CatalogueMatchDTO) GetImagedObjectIdOk() (*string, bool)`

GetImagedObjectIdOk returns a tuple with the ImagedObjectId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImagedObjectId

`func (o *CatalogueMatchDTO) SetImagedObjectId(v string)`

SetImagedObjectId sets ImagedObjectId field to given value.


### GetManuscriptId

`func (o *CatalogueMatchDTO) GetManuscriptId() int32`

GetManuscriptId returns the ManuscriptId field if non-nil, zero value otherwise.

### GetManuscriptIdOk

`func (o *CatalogueMatchDTO) GetManuscriptIdOk() (*int32, bool)`

GetManuscriptIdOk returns a tuple with the ManuscriptId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuscriptId

`func (o *CatalogueMatchDTO) SetManuscriptId(v int32)`

SetManuscriptId sets ManuscriptId field to given value.


### GetEditionName

`func (o *CatalogueMatchDTO) GetEditionName() string`

GetEditionName returns the EditionName field if non-nil, zero value otherwise.

### GetEditionNameOk

`func (o *CatalogueMatchDTO) GetEditionNameOk() (*string, bool)`

GetEditionNameOk returns a tuple with the EditionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionName

`func (o *CatalogueMatchDTO) SetEditionName(v string)`

SetEditionName sets EditionName field to given value.


### GetEditionVolume

`func (o *CatalogueMatchDTO) GetEditionVolume() string`

GetEditionVolume returns the EditionVolume field if non-nil, zero value otherwise.

### GetEditionVolumeOk

`func (o *CatalogueMatchDTO) GetEditionVolumeOk() (*string, bool)`

GetEditionVolumeOk returns a tuple with the EditionVolume field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionVolume

`func (o *CatalogueMatchDTO) SetEditionVolume(v string)`

SetEditionVolume sets EditionVolume field to given value.


### GetEditionLocation1

`func (o *CatalogueMatchDTO) GetEditionLocation1() string`

GetEditionLocation1 returns the EditionLocation1 field if non-nil, zero value otherwise.

### GetEditionLocation1Ok

`func (o *CatalogueMatchDTO) GetEditionLocation1Ok() (*string, bool)`

GetEditionLocation1Ok returns a tuple with the EditionLocation1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionLocation1

`func (o *CatalogueMatchDTO) SetEditionLocation1(v string)`

SetEditionLocation1 sets EditionLocation1 field to given value.


### GetEditionLocation2

`func (o *CatalogueMatchDTO) GetEditionLocation2() string`

GetEditionLocation2 returns the EditionLocation2 field if non-nil, zero value otherwise.

### GetEditionLocation2Ok

`func (o *CatalogueMatchDTO) GetEditionLocation2Ok() (*string, bool)`

GetEditionLocation2Ok returns a tuple with the EditionLocation2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionLocation2

`func (o *CatalogueMatchDTO) SetEditionLocation2(v string)`

SetEditionLocation2 sets EditionLocation2 field to given value.


### GetEditionSide

`func (o *CatalogueMatchDTO) GetEditionSide() SideDesignation`

GetEditionSide returns the EditionSide field if non-nil, zero value otherwise.

### GetEditionSideOk

`func (o *CatalogueMatchDTO) GetEditionSideOk() (*SideDesignation, bool)`

GetEditionSideOk returns a tuple with the EditionSide field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionSide

`func (o *CatalogueMatchDTO) SetEditionSide(v SideDesignation)`

SetEditionSide sets EditionSide field to given value.


### GetComment

`func (o *CatalogueMatchDTO) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *CatalogueMatchDTO) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *CatalogueMatchDTO) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *CatalogueMatchDTO) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *CatalogueMatchDTO) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *CatalogueMatchDTO) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetTextFragmentId

`func (o *CatalogueMatchDTO) GetTextFragmentId() int32`

GetTextFragmentId returns the TextFragmentId field if non-nil, zero value otherwise.

### GetTextFragmentIdOk

`func (o *CatalogueMatchDTO) GetTextFragmentIdOk() (*int32, bool)`

GetTextFragmentIdOk returns a tuple with the TextFragmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextFragmentId

`func (o *CatalogueMatchDTO) SetTextFragmentId(v int32)`

SetTextFragmentId sets TextFragmentId field to given value.


### GetEditionId

`func (o *CatalogueMatchDTO) GetEditionId() int32`

GetEditionId returns the EditionId field if non-nil, zero value otherwise.

### GetEditionIdOk

`func (o *CatalogueMatchDTO) GetEditionIdOk() (*int32, bool)`

GetEditionIdOk returns a tuple with the EditionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionId

`func (o *CatalogueMatchDTO) SetEditionId(v int32)`

SetEditionId sets EditionId field to given value.


### GetConfirmed

`func (o *CatalogueMatchDTO) GetConfirmed() bool`

GetConfirmed returns the Confirmed field if non-nil, zero value otherwise.

### GetConfirmedOk

`func (o *CatalogueMatchDTO) GetConfirmedOk() (*bool, bool)`

GetConfirmedOk returns a tuple with the Confirmed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmed

`func (o *CatalogueMatchDTO) SetConfirmed(v bool)`

SetConfirmed sets Confirmed field to given value.

### HasConfirmed

`func (o *CatalogueMatchDTO) HasConfirmed() bool`

HasConfirmed returns a boolean if a field has been set.

### SetConfirmedNil

`func (o *CatalogueMatchDTO) SetConfirmedNil(b bool)`

 SetConfirmedNil sets the value for Confirmed to be an explicit nil

### UnsetConfirmed
`func (o *CatalogueMatchDTO) UnsetConfirmed()`

UnsetConfirmed ensures that no value is present for Confirmed, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


