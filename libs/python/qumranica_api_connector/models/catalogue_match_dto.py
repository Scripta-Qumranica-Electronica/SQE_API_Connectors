# coding: utf-8

"""
    SQE API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: v1
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from qumranica_api_connector.configuration import Configuration


class CatalogueMatchDTO(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'image_catalog_id': 'int',
        'institution': 'str',
        'catalogue_number1': 'str',
        'catalogue_number2': 'str',
        'proxy': 'str',
        'url': 'str',
        'filename': 'str',
        'suffix': 'str',
        'thumbnail': 'str',
        'license': 'str',
        'iaa_edition_catalogue_id': 'int',
        'manuscript_name': 'str',
        'name': 'str',
        'match_author': 'str',
        'match_confirmation_author': 'str',
        'match_id': 'int',
        'date_of_match': 'datetime',
        'date_of_confirmation': 'datetime',
        'catalog_side': 'SideDesignation',
        'imaged_object_id': 'str',
        'manuscript_id': 'int',
        'edition_name': 'str',
        'edition_volume': 'str',
        'edition_location1': 'str',
        'edition_location2': 'str',
        'edition_side': 'SideDesignation',
        'comment': 'str',
        'text_fragment_id': 'int',
        'edition_id': 'int',
        'confirmed': 'bool'
    }

    attribute_map = {
        'image_catalog_id': 'imageCatalogId',
        'institution': 'institution',
        'catalogue_number1': 'catalogueNumber1',
        'catalogue_number2': 'catalogueNumber2',
        'proxy': 'proxy',
        'url': 'url',
        'filename': 'filename',
        'suffix': 'suffix',
        'thumbnail': 'thumbnail',
        'license': 'license',
        'iaa_edition_catalogue_id': 'iaaEditionCatalogueId',
        'manuscript_name': 'manuscriptName',
        'name': 'name',
        'match_author': 'matchAuthor',
        'match_confirmation_author': 'matchConfirmationAuthor',
        'match_id': 'matchId',
        'date_of_match': 'dateOfMatch',
        'date_of_confirmation': 'dateOfConfirmation',
        'catalog_side': 'catalogSide',
        'imaged_object_id': 'imagedObjectId',
        'manuscript_id': 'manuscriptId',
        'edition_name': 'editionName',
        'edition_volume': 'editionVolume',
        'edition_location1': 'editionLocation1',
        'edition_location2': 'editionLocation2',
        'edition_side': 'editionSide',
        'comment': 'comment',
        'text_fragment_id': 'textFragmentId',
        'edition_id': 'editionId',
        'confirmed': 'confirmed'
    }

    def __init__(self, image_catalog_id=None, institution=None, catalogue_number1=None, catalogue_number2=None, proxy=None, url=None, filename=None, suffix=None, thumbnail=None, license=None, iaa_edition_catalogue_id=None, manuscript_name=None, name=None, match_author=None, match_confirmation_author=None, match_id=None, date_of_match=None, date_of_confirmation=None, catalog_side=None, imaged_object_id=None, manuscript_id=None, edition_name=None, edition_volume=None, edition_location1=None, edition_location2=None, edition_side=None, comment=None, text_fragment_id=None, edition_id=None, confirmed=None, local_vars_configuration=None):  # noqa: E501
        """CatalogueMatchDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._image_catalog_id = None
        self._institution = None
        self._catalogue_number1 = None
        self._catalogue_number2 = None
        self._proxy = None
        self._url = None
        self._filename = None
        self._suffix = None
        self._thumbnail = None
        self._license = None
        self._iaa_edition_catalogue_id = None
        self._manuscript_name = None
        self._name = None
        self._match_author = None
        self._match_confirmation_author = None
        self._match_id = None
        self._date_of_match = None
        self._date_of_confirmation = None
        self._catalog_side = None
        self._imaged_object_id = None
        self._manuscript_id = None
        self._edition_name = None
        self._edition_volume = None
        self._edition_location1 = None
        self._edition_location2 = None
        self._edition_side = None
        self._comment = None
        self._text_fragment_id = None
        self._edition_id = None
        self._confirmed = None
        self.discriminator = None

        self.image_catalog_id = image_catalog_id
        self.institution = institution
        self.catalogue_number1 = catalogue_number1
        self.catalogue_number2 = catalogue_number2
        self.proxy = proxy
        self.url = url
        self.filename = filename
        self.suffix = suffix
        self.thumbnail = thumbnail
        self.license = license
        self.iaa_edition_catalogue_id = iaa_edition_catalogue_id
        self.manuscript_name = manuscript_name
        self.name = name
        self.match_author = match_author
        self.match_confirmation_author = match_confirmation_author
        self.match_id = match_id
        self.date_of_match = date_of_match
        self.date_of_confirmation = date_of_confirmation
        if catalog_side is not None:
            self.catalog_side = catalog_side
        self.imaged_object_id = imaged_object_id
        self.manuscript_id = manuscript_id
        self.edition_name = edition_name
        self.edition_volume = edition_volume
        self.edition_location1 = edition_location1
        self.edition_location2 = edition_location2
        self.edition_side = edition_side
        self.comment = comment
        self.text_fragment_id = text_fragment_id
        self.edition_id = edition_id
        self.confirmed = confirmed

    @property
    def image_catalog_id(self):
        """Gets the image_catalog_id of this CatalogueMatchDTO.  # noqa: E501


        :return: The image_catalog_id of this CatalogueMatchDTO.  # noqa: E501
        :rtype: int
        """
        return self._image_catalog_id

    @image_catalog_id.setter
    def image_catalog_id(self, image_catalog_id):
        """Sets the image_catalog_id of this CatalogueMatchDTO.


        :param image_catalog_id: The image_catalog_id of this CatalogueMatchDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and image_catalog_id is None:  # noqa: E501
            raise ValueError("Invalid value for `image_catalog_id`, must not be `None`")  # noqa: E501

        self._image_catalog_id = image_catalog_id

    @property
    def institution(self):
        """Gets the institution of this CatalogueMatchDTO.  # noqa: E501


        :return: The institution of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._institution

    @institution.setter
    def institution(self, institution):
        """Sets the institution of this CatalogueMatchDTO.


        :param institution: The institution of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and institution is None:  # noqa: E501
            raise ValueError("Invalid value for `institution`, must not be `None`")  # noqa: E501

        self._institution = institution

    @property
    def catalogue_number1(self):
        """Gets the catalogue_number1 of this CatalogueMatchDTO.  # noqa: E501


        :return: The catalogue_number1 of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._catalogue_number1

    @catalogue_number1.setter
    def catalogue_number1(self, catalogue_number1):
        """Sets the catalogue_number1 of this CatalogueMatchDTO.


        :param catalogue_number1: The catalogue_number1 of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and catalogue_number1 is None:  # noqa: E501
            raise ValueError("Invalid value for `catalogue_number1`, must not be `None`")  # noqa: E501

        self._catalogue_number1 = catalogue_number1

    @property
    def catalogue_number2(self):
        """Gets the catalogue_number2 of this CatalogueMatchDTO.  # noqa: E501


        :return: The catalogue_number2 of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._catalogue_number2

    @catalogue_number2.setter
    def catalogue_number2(self, catalogue_number2):
        """Sets the catalogue_number2 of this CatalogueMatchDTO.


        :param catalogue_number2: The catalogue_number2 of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """

        self._catalogue_number2 = catalogue_number2

    @property
    def proxy(self):
        """Gets the proxy of this CatalogueMatchDTO.  # noqa: E501


        :return: The proxy of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._proxy

    @proxy.setter
    def proxy(self, proxy):
        """Sets the proxy of this CatalogueMatchDTO.


        :param proxy: The proxy of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """

        self._proxy = proxy

    @property
    def url(self):
        """Gets the url of this CatalogueMatchDTO.  # noqa: E501


        :return: The url of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._url

    @url.setter
    def url(self, url):
        """Sets the url of this CatalogueMatchDTO.


        :param url: The url of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and url is None:  # noqa: E501
            raise ValueError("Invalid value for `url`, must not be `None`")  # noqa: E501

        self._url = url

    @property
    def filename(self):
        """Gets the filename of this CatalogueMatchDTO.  # noqa: E501


        :return: The filename of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._filename

    @filename.setter
    def filename(self, filename):
        """Sets the filename of this CatalogueMatchDTO.


        :param filename: The filename of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and filename is None:  # noqa: E501
            raise ValueError("Invalid value for `filename`, must not be `None`")  # noqa: E501

        self._filename = filename

    @property
    def suffix(self):
        """Gets the suffix of this CatalogueMatchDTO.  # noqa: E501


        :return: The suffix of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._suffix

    @suffix.setter
    def suffix(self, suffix):
        """Sets the suffix of this CatalogueMatchDTO.


        :param suffix: The suffix of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and suffix is None:  # noqa: E501
            raise ValueError("Invalid value for `suffix`, must not be `None`")  # noqa: E501

        self._suffix = suffix

    @property
    def thumbnail(self):
        """Gets the thumbnail of this CatalogueMatchDTO.  # noqa: E501


        :return: The thumbnail of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._thumbnail

    @thumbnail.setter
    def thumbnail(self, thumbnail):
        """Sets the thumbnail of this CatalogueMatchDTO.


        :param thumbnail: The thumbnail of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and thumbnail is None:  # noqa: E501
            raise ValueError("Invalid value for `thumbnail`, must not be `None`")  # noqa: E501

        self._thumbnail = thumbnail

    @property
    def license(self):
        """Gets the license of this CatalogueMatchDTO.  # noqa: E501


        :return: The license of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._license

    @license.setter
    def license(self, license):
        """Sets the license of this CatalogueMatchDTO.


        :param license: The license of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and license is None:  # noqa: E501
            raise ValueError("Invalid value for `license`, must not be `None`")  # noqa: E501

        self._license = license

    @property
    def iaa_edition_catalogue_id(self):
        """Gets the iaa_edition_catalogue_id of this CatalogueMatchDTO.  # noqa: E501


        :return: The iaa_edition_catalogue_id of this CatalogueMatchDTO.  # noqa: E501
        :rtype: int
        """
        return self._iaa_edition_catalogue_id

    @iaa_edition_catalogue_id.setter
    def iaa_edition_catalogue_id(self, iaa_edition_catalogue_id):
        """Sets the iaa_edition_catalogue_id of this CatalogueMatchDTO.


        :param iaa_edition_catalogue_id: The iaa_edition_catalogue_id of this CatalogueMatchDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and iaa_edition_catalogue_id is None:  # noqa: E501
            raise ValueError("Invalid value for `iaa_edition_catalogue_id`, must not be `None`")  # noqa: E501

        self._iaa_edition_catalogue_id = iaa_edition_catalogue_id

    @property
    def manuscript_name(self):
        """Gets the manuscript_name of this CatalogueMatchDTO.  # noqa: E501


        :return: The manuscript_name of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._manuscript_name

    @manuscript_name.setter
    def manuscript_name(self, manuscript_name):
        """Sets the manuscript_name of this CatalogueMatchDTO.


        :param manuscript_name: The manuscript_name of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and manuscript_name is None:  # noqa: E501
            raise ValueError("Invalid value for `manuscript_name`, must not be `None`")  # noqa: E501

        self._manuscript_name = manuscript_name

    @property
    def name(self):
        """Gets the name of this CatalogueMatchDTO.  # noqa: E501


        :return: The name of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this CatalogueMatchDTO.


        :param name: The name of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and name is None:  # noqa: E501
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def match_author(self):
        """Gets the match_author of this CatalogueMatchDTO.  # noqa: E501


        :return: The match_author of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._match_author

    @match_author.setter
    def match_author(self, match_author):
        """Sets the match_author of this CatalogueMatchDTO.


        :param match_author: The match_author of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and match_author is None:  # noqa: E501
            raise ValueError("Invalid value for `match_author`, must not be `None`")  # noqa: E501

        self._match_author = match_author

    @property
    def match_confirmation_author(self):
        """Gets the match_confirmation_author of this CatalogueMatchDTO.  # noqa: E501


        :return: The match_confirmation_author of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._match_confirmation_author

    @match_confirmation_author.setter
    def match_confirmation_author(self, match_confirmation_author):
        """Sets the match_confirmation_author of this CatalogueMatchDTO.


        :param match_confirmation_author: The match_confirmation_author of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """

        self._match_confirmation_author = match_confirmation_author

    @property
    def match_id(self):
        """Gets the match_id of this CatalogueMatchDTO.  # noqa: E501


        :return: The match_id of this CatalogueMatchDTO.  # noqa: E501
        :rtype: int
        """
        return self._match_id

    @match_id.setter
    def match_id(self, match_id):
        """Sets the match_id of this CatalogueMatchDTO.


        :param match_id: The match_id of this CatalogueMatchDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and match_id is None:  # noqa: E501
            raise ValueError("Invalid value for `match_id`, must not be `None`")  # noqa: E501

        self._match_id = match_id

    @property
    def date_of_match(self):
        """Gets the date_of_match of this CatalogueMatchDTO.  # noqa: E501


        :return: The date_of_match of this CatalogueMatchDTO.  # noqa: E501
        :rtype: datetime
        """
        return self._date_of_match

    @date_of_match.setter
    def date_of_match(self, date_of_match):
        """Sets the date_of_match of this CatalogueMatchDTO.


        :param date_of_match: The date_of_match of this CatalogueMatchDTO.  # noqa: E501
        :type: datetime
        """
        if self.local_vars_configuration.client_side_validation and date_of_match is None:  # noqa: E501
            raise ValueError("Invalid value for `date_of_match`, must not be `None`")  # noqa: E501

        self._date_of_match = date_of_match

    @property
    def date_of_confirmation(self):
        """Gets the date_of_confirmation of this CatalogueMatchDTO.  # noqa: E501


        :return: The date_of_confirmation of this CatalogueMatchDTO.  # noqa: E501
        :rtype: datetime
        """
        return self._date_of_confirmation

    @date_of_confirmation.setter
    def date_of_confirmation(self, date_of_confirmation):
        """Sets the date_of_confirmation of this CatalogueMatchDTO.


        :param date_of_confirmation: The date_of_confirmation of this CatalogueMatchDTO.  # noqa: E501
        :type: datetime
        """

        self._date_of_confirmation = date_of_confirmation

    @property
    def catalog_side(self):
        """Gets the catalog_side of this CatalogueMatchDTO.  # noqa: E501


        :return: The catalog_side of this CatalogueMatchDTO.  # noqa: E501
        :rtype: SideDesignation
        """
        return self._catalog_side

    @catalog_side.setter
    def catalog_side(self, catalog_side):
        """Sets the catalog_side of this CatalogueMatchDTO.


        :param catalog_side: The catalog_side of this CatalogueMatchDTO.  # noqa: E501
        :type: SideDesignation
        """

        self._catalog_side = catalog_side

    @property
    def imaged_object_id(self):
        """Gets the imaged_object_id of this CatalogueMatchDTO.  # noqa: E501


        :return: The imaged_object_id of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._imaged_object_id

    @imaged_object_id.setter
    def imaged_object_id(self, imaged_object_id):
        """Sets the imaged_object_id of this CatalogueMatchDTO.


        :param imaged_object_id: The imaged_object_id of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and imaged_object_id is None:  # noqa: E501
            raise ValueError("Invalid value for `imaged_object_id`, must not be `None`")  # noqa: E501

        self._imaged_object_id = imaged_object_id

    @property
    def manuscript_id(self):
        """Gets the manuscript_id of this CatalogueMatchDTO.  # noqa: E501


        :return: The manuscript_id of this CatalogueMatchDTO.  # noqa: E501
        :rtype: int
        """
        return self._manuscript_id

    @manuscript_id.setter
    def manuscript_id(self, manuscript_id):
        """Sets the manuscript_id of this CatalogueMatchDTO.


        :param manuscript_id: The manuscript_id of this CatalogueMatchDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and manuscript_id is None:  # noqa: E501
            raise ValueError("Invalid value for `manuscript_id`, must not be `None`")  # noqa: E501

        self._manuscript_id = manuscript_id

    @property
    def edition_name(self):
        """Gets the edition_name of this CatalogueMatchDTO.  # noqa: E501


        :return: The edition_name of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._edition_name

    @edition_name.setter
    def edition_name(self, edition_name):
        """Sets the edition_name of this CatalogueMatchDTO.


        :param edition_name: The edition_name of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and edition_name is None:  # noqa: E501
            raise ValueError("Invalid value for `edition_name`, must not be `None`")  # noqa: E501

        self._edition_name = edition_name

    @property
    def edition_volume(self):
        """Gets the edition_volume of this CatalogueMatchDTO.  # noqa: E501


        :return: The edition_volume of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._edition_volume

    @edition_volume.setter
    def edition_volume(self, edition_volume):
        """Sets the edition_volume of this CatalogueMatchDTO.


        :param edition_volume: The edition_volume of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and edition_volume is None:  # noqa: E501
            raise ValueError("Invalid value for `edition_volume`, must not be `None`")  # noqa: E501

        self._edition_volume = edition_volume

    @property
    def edition_location1(self):
        """Gets the edition_location1 of this CatalogueMatchDTO.  # noqa: E501


        :return: The edition_location1 of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._edition_location1

    @edition_location1.setter
    def edition_location1(self, edition_location1):
        """Sets the edition_location1 of this CatalogueMatchDTO.


        :param edition_location1: The edition_location1 of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and edition_location1 is None:  # noqa: E501
            raise ValueError("Invalid value for `edition_location1`, must not be `None`")  # noqa: E501

        self._edition_location1 = edition_location1

    @property
    def edition_location2(self):
        """Gets the edition_location2 of this CatalogueMatchDTO.  # noqa: E501


        :return: The edition_location2 of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._edition_location2

    @edition_location2.setter
    def edition_location2(self, edition_location2):
        """Sets the edition_location2 of this CatalogueMatchDTO.


        :param edition_location2: The edition_location2 of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and edition_location2 is None:  # noqa: E501
            raise ValueError("Invalid value for `edition_location2`, must not be `None`")  # noqa: E501

        self._edition_location2 = edition_location2

    @property
    def edition_side(self):
        """Gets the edition_side of this CatalogueMatchDTO.  # noqa: E501


        :return: The edition_side of this CatalogueMatchDTO.  # noqa: E501
        :rtype: SideDesignation
        """
        return self._edition_side

    @edition_side.setter
    def edition_side(self, edition_side):
        """Sets the edition_side of this CatalogueMatchDTO.


        :param edition_side: The edition_side of this CatalogueMatchDTO.  # noqa: E501
        :type: SideDesignation
        """
        if self.local_vars_configuration.client_side_validation and edition_side is None:  # noqa: E501
            raise ValueError("Invalid value for `edition_side`, must not be `None`")  # noqa: E501

        self._edition_side = edition_side

    @property
    def comment(self):
        """Gets the comment of this CatalogueMatchDTO.  # noqa: E501


        :return: The comment of this CatalogueMatchDTO.  # noqa: E501
        :rtype: str
        """
        return self._comment

    @comment.setter
    def comment(self, comment):
        """Sets the comment of this CatalogueMatchDTO.


        :param comment: The comment of this CatalogueMatchDTO.  # noqa: E501
        :type: str
        """

        self._comment = comment

    @property
    def text_fragment_id(self):
        """Gets the text_fragment_id of this CatalogueMatchDTO.  # noqa: E501


        :return: The text_fragment_id of this CatalogueMatchDTO.  # noqa: E501
        :rtype: int
        """
        return self._text_fragment_id

    @text_fragment_id.setter
    def text_fragment_id(self, text_fragment_id):
        """Sets the text_fragment_id of this CatalogueMatchDTO.


        :param text_fragment_id: The text_fragment_id of this CatalogueMatchDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and text_fragment_id is None:  # noqa: E501
            raise ValueError("Invalid value for `text_fragment_id`, must not be `None`")  # noqa: E501

        self._text_fragment_id = text_fragment_id

    @property
    def edition_id(self):
        """Gets the edition_id of this CatalogueMatchDTO.  # noqa: E501


        :return: The edition_id of this CatalogueMatchDTO.  # noqa: E501
        :rtype: int
        """
        return self._edition_id

    @edition_id.setter
    def edition_id(self, edition_id):
        """Sets the edition_id of this CatalogueMatchDTO.


        :param edition_id: The edition_id of this CatalogueMatchDTO.  # noqa: E501
        :type: int
        """
        if self.local_vars_configuration.client_side_validation and edition_id is None:  # noqa: E501
            raise ValueError("Invalid value for `edition_id`, must not be `None`")  # noqa: E501

        self._edition_id = edition_id

    @property
    def confirmed(self):
        """Gets the confirmed of this CatalogueMatchDTO.  # noqa: E501


        :return: The confirmed of this CatalogueMatchDTO.  # noqa: E501
        :rtype: bool
        """
        return self._confirmed

    @confirmed.setter
    def confirmed(self, confirmed):
        """Sets the confirmed of this CatalogueMatchDTO.


        :param confirmed: The confirmed of this CatalogueMatchDTO.  # noqa: E501
        :type: bool
        """

        self._confirmed = confirmed

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, CatalogueMatchDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CatalogueMatchDTO):
            return True

        return self.to_dict() != other.to_dict()
