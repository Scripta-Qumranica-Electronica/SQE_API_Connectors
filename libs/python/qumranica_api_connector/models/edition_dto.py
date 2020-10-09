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


class EditionDTO(object):
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
        'id': 'int',
        'name': 'str',
        'edition_data_editor_id': 'int',
        'permission': 'PermissionDTO',
        'owner': 'UserDTO',
        'thumbnail_url': 'str',
        'shares': 'list[DetailedEditorRightsDTO]',
        'metrics': 'EditionManuscriptMetricsDTO',
        'locked': 'bool',
        'is_public': 'bool',
        'last_edit': 'datetime',
        'copyright': 'str'
    }

    attribute_map = {
        'id': 'id',
        'name': 'name',
        'edition_data_editor_id': 'editionDataEditorId',
        'permission': 'permission',
        'owner': 'owner',
        'thumbnail_url': 'thumbnailUrl',
        'shares': 'shares',
        'metrics': 'metrics',
        'locked': 'locked',
        'is_public': 'isPublic',
        'last_edit': 'lastEdit',
        'copyright': 'copyright'
    }

    def __init__(self, id=None, name=None, edition_data_editor_id=None, permission=None, owner=None, thumbnail_url=None, shares=None, metrics=None, locked=None, is_public=None, last_edit=None, copyright=None, local_vars_configuration=None):  # noqa: E501
        """EditionDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._id = None
        self._name = None
        self._edition_data_editor_id = None
        self._permission = None
        self._owner = None
        self._thumbnail_url = None
        self._shares = None
        self._metrics = None
        self._locked = None
        self._is_public = None
        self._last_edit = None
        self._copyright = None
        self.discriminator = None

        self.id = id
        self.name = name
        self.edition_data_editor_id = edition_data_editor_id
        self.permission = permission
        self.owner = owner
        self.thumbnail_url = thumbnail_url
        self.shares = shares
        self.metrics = metrics
        self.locked = locked
        self.is_public = is_public
        self.last_edit = last_edit
        self.copyright = copyright

    @property
    def id(self):
        """Gets the id of this EditionDTO.  # noqa: E501


        :return: The id of this EditionDTO.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this EditionDTO.


        :param id: The id of this EditionDTO.  # noqa: E501
        :type id: int
        """
        if self.local_vars_configuration.client_side_validation and id is None:  # noqa: E501
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def name(self):
        """Gets the name of this EditionDTO.  # noqa: E501


        :return: The name of this EditionDTO.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this EditionDTO.


        :param name: The name of this EditionDTO.  # noqa: E501
        :type name: str
        """
        if self.local_vars_configuration.client_side_validation and name is None:  # noqa: E501
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def edition_data_editor_id(self):
        """Gets the edition_data_editor_id of this EditionDTO.  # noqa: E501


        :return: The edition_data_editor_id of this EditionDTO.  # noqa: E501
        :rtype: int
        """
        return self._edition_data_editor_id

    @edition_data_editor_id.setter
    def edition_data_editor_id(self, edition_data_editor_id):
        """Sets the edition_data_editor_id of this EditionDTO.


        :param edition_data_editor_id: The edition_data_editor_id of this EditionDTO.  # noqa: E501
        :type edition_data_editor_id: int
        """
        if self.local_vars_configuration.client_side_validation and edition_data_editor_id is None:  # noqa: E501
            raise ValueError("Invalid value for `edition_data_editor_id`, must not be `None`")  # noqa: E501

        self._edition_data_editor_id = edition_data_editor_id

    @property
    def permission(self):
        """Gets the permission of this EditionDTO.  # noqa: E501


        :return: The permission of this EditionDTO.  # noqa: E501
        :rtype: PermissionDTO
        """
        return self._permission

    @permission.setter
    def permission(self, permission):
        """Sets the permission of this EditionDTO.


        :param permission: The permission of this EditionDTO.  # noqa: E501
        :type permission: PermissionDTO
        """
        if self.local_vars_configuration.client_side_validation and permission is None:  # noqa: E501
            raise ValueError("Invalid value for `permission`, must not be `None`")  # noqa: E501

        self._permission = permission

    @property
    def owner(self):
        """Gets the owner of this EditionDTO.  # noqa: E501


        :return: The owner of this EditionDTO.  # noqa: E501
        :rtype: UserDTO
        """
        return self._owner

    @owner.setter
    def owner(self, owner):
        """Sets the owner of this EditionDTO.


        :param owner: The owner of this EditionDTO.  # noqa: E501
        :type owner: UserDTO
        """
        if self.local_vars_configuration.client_side_validation and owner is None:  # noqa: E501
            raise ValueError("Invalid value for `owner`, must not be `None`")  # noqa: E501

        self._owner = owner

    @property
    def thumbnail_url(self):
        """Gets the thumbnail_url of this EditionDTO.  # noqa: E501


        :return: The thumbnail_url of this EditionDTO.  # noqa: E501
        :rtype: str
        """
        return self._thumbnail_url

    @thumbnail_url.setter
    def thumbnail_url(self, thumbnail_url):
        """Sets the thumbnail_url of this EditionDTO.


        :param thumbnail_url: The thumbnail_url of this EditionDTO.  # noqa: E501
        :type thumbnail_url: str
        """

        self._thumbnail_url = thumbnail_url

    @property
    def shares(self):
        """Gets the shares of this EditionDTO.  # noqa: E501


        :return: The shares of this EditionDTO.  # noqa: E501
        :rtype: list[DetailedEditorRightsDTO]
        """
        return self._shares

    @shares.setter
    def shares(self, shares):
        """Sets the shares of this EditionDTO.


        :param shares: The shares of this EditionDTO.  # noqa: E501
        :type shares: list[DetailedEditorRightsDTO]
        """
        if self.local_vars_configuration.client_side_validation and shares is None:  # noqa: E501
            raise ValueError("Invalid value for `shares`, must not be `None`")  # noqa: E501

        self._shares = shares

    @property
    def metrics(self):
        """Gets the metrics of this EditionDTO.  # noqa: E501


        :return: The metrics of this EditionDTO.  # noqa: E501
        :rtype: EditionManuscriptMetricsDTO
        """
        return self._metrics

    @metrics.setter
    def metrics(self, metrics):
        """Sets the metrics of this EditionDTO.


        :param metrics: The metrics of this EditionDTO.  # noqa: E501
        :type metrics: EditionManuscriptMetricsDTO
        """
        if self.local_vars_configuration.client_side_validation and metrics is None:  # noqa: E501
            raise ValueError("Invalid value for `metrics`, must not be `None`")  # noqa: E501

        self._metrics = metrics

    @property
    def locked(self):
        """Gets the locked of this EditionDTO.  # noqa: E501


        :return: The locked of this EditionDTO.  # noqa: E501
        :rtype: bool
        """
        return self._locked

    @locked.setter
    def locked(self, locked):
        """Sets the locked of this EditionDTO.


        :param locked: The locked of this EditionDTO.  # noqa: E501
        :type locked: bool
        """
        if self.local_vars_configuration.client_side_validation and locked is None:  # noqa: E501
            raise ValueError("Invalid value for `locked`, must not be `None`")  # noqa: E501

        self._locked = locked

    @property
    def is_public(self):
        """Gets the is_public of this EditionDTO.  # noqa: E501


        :return: The is_public of this EditionDTO.  # noqa: E501
        :rtype: bool
        """
        return self._is_public

    @is_public.setter
    def is_public(self, is_public):
        """Sets the is_public of this EditionDTO.


        :param is_public: The is_public of this EditionDTO.  # noqa: E501
        :type is_public: bool
        """
        if self.local_vars_configuration.client_side_validation and is_public is None:  # noqa: E501
            raise ValueError("Invalid value for `is_public`, must not be `None`")  # noqa: E501

        self._is_public = is_public

    @property
    def last_edit(self):
        """Gets the last_edit of this EditionDTO.  # noqa: E501


        :return: The last_edit of this EditionDTO.  # noqa: E501
        :rtype: datetime
        """
        return self._last_edit

    @last_edit.setter
    def last_edit(self, last_edit):
        """Sets the last_edit of this EditionDTO.


        :param last_edit: The last_edit of this EditionDTO.  # noqa: E501
        :type last_edit: datetime
        """

        self._last_edit = last_edit

    @property
    def copyright(self):
        """Gets the copyright of this EditionDTO.  # noqa: E501


        :return: The copyright of this EditionDTO.  # noqa: E501
        :rtype: str
        """
        return self._copyright

    @copyright.setter
    def copyright(self, copyright):
        """Sets the copyright of this EditionDTO.


        :param copyright: The copyright of this EditionDTO.  # noqa: E501
        :type copyright: str
        """
        if self.local_vars_configuration.client_side_validation and copyright is None:  # noqa: E501
            raise ValueError("Invalid value for `copyright`, must not be `None`")  # noqa: E501

        self._copyright = copyright

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
        if not isinstance(other, EditionDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, EditionDTO):
            return True

        return self.to_dict() != other.to_dict()