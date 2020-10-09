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

from openapi_client.configuration import Configuration


class AdminEditorRequestDTO(object):
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
        'editor_name': 'str',
        'editor_email': 'str',
        'edition_id': 'int',
        'edition_name': 'str',
        'date': 'datetime',
        'may_lock': 'bool',
        'may_read': 'bool',
        'may_write': 'bool',
        'is_admin': 'bool'
    }

    attribute_map = {
        'editor_name': 'editorName',
        'editor_email': 'editorEmail',
        'edition_id': 'editionId',
        'edition_name': 'editionName',
        'date': 'date',
        'may_lock': 'mayLock',
        'may_read': 'mayRead',
        'may_write': 'mayWrite',
        'is_admin': 'isAdmin'
    }

    def __init__(self, editor_name=None, editor_email=None, edition_id=None, edition_name=None, date=None, may_lock=None, may_read=None, may_write=None, is_admin=None, local_vars_configuration=None):  # noqa: E501
        """AdminEditorRequestDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._editor_name = None
        self._editor_email = None
        self._edition_id = None
        self._edition_name = None
        self._date = None
        self._may_lock = None
        self._may_read = None
        self._may_write = None
        self._is_admin = None
        self.discriminator = None

        self.editor_name = editor_name
        self.editor_email = editor_email
        self.edition_id = edition_id
        self.edition_name = edition_name
        self.date = date
        self.may_lock = may_lock
        self.may_read = may_read
        self.may_write = may_write
        self.is_admin = is_admin

    @property
    def editor_name(self):
        """Gets the editor_name of this AdminEditorRequestDTO.  # noqa: E501


        :return: The editor_name of this AdminEditorRequestDTO.  # noqa: E501
        :rtype: str
        """
        return self._editor_name

    @editor_name.setter
    def editor_name(self, editor_name):
        """Sets the editor_name of this AdminEditorRequestDTO.


        :param editor_name: The editor_name of this AdminEditorRequestDTO.  # noqa: E501
        :type editor_name: str
        """

        self._editor_name = editor_name

    @property
    def editor_email(self):
        """Gets the editor_email of this AdminEditorRequestDTO.  # noqa: E501


        :return: The editor_email of this AdminEditorRequestDTO.  # noqa: E501
        :rtype: str
        """
        return self._editor_email

    @editor_email.setter
    def editor_email(self, editor_email):
        """Sets the editor_email of this AdminEditorRequestDTO.


        :param editor_email: The editor_email of this AdminEditorRequestDTO.  # noqa: E501
        :type editor_email: str
        """
        if self.local_vars_configuration.client_side_validation and editor_email is None:  # noqa: E501
            raise ValueError("Invalid value for `editor_email`, must not be `None`")  # noqa: E501

        self._editor_email = editor_email

    @property
    def edition_id(self):
        """Gets the edition_id of this AdminEditorRequestDTO.  # noqa: E501


        :return: The edition_id of this AdminEditorRequestDTO.  # noqa: E501
        :rtype: int
        """
        return self._edition_id

    @edition_id.setter
    def edition_id(self, edition_id):
        """Sets the edition_id of this AdminEditorRequestDTO.


        :param edition_id: The edition_id of this AdminEditorRequestDTO.  # noqa: E501
        :type edition_id: int
        """
        if self.local_vars_configuration.client_side_validation and edition_id is None:  # noqa: E501
            raise ValueError("Invalid value for `edition_id`, must not be `None`")  # noqa: E501

        self._edition_id = edition_id

    @property
    def edition_name(self):
        """Gets the edition_name of this AdminEditorRequestDTO.  # noqa: E501


        :return: The edition_name of this AdminEditorRequestDTO.  # noqa: E501
        :rtype: str
        """
        return self._edition_name

    @edition_name.setter
    def edition_name(self, edition_name):
        """Sets the edition_name of this AdminEditorRequestDTO.


        :param edition_name: The edition_name of this AdminEditorRequestDTO.  # noqa: E501
        :type edition_name: str
        """
        if self.local_vars_configuration.client_side_validation and edition_name is None:  # noqa: E501
            raise ValueError("Invalid value for `edition_name`, must not be `None`")  # noqa: E501

        self._edition_name = edition_name

    @property
    def date(self):
        """Gets the date of this AdminEditorRequestDTO.  # noqa: E501


        :return: The date of this AdminEditorRequestDTO.  # noqa: E501
        :rtype: datetime
        """
        return self._date

    @date.setter
    def date(self, date):
        """Sets the date of this AdminEditorRequestDTO.


        :param date: The date of this AdminEditorRequestDTO.  # noqa: E501
        :type date: datetime
        """
        if self.local_vars_configuration.client_side_validation and date is None:  # noqa: E501
            raise ValueError("Invalid value for `date`, must not be `None`")  # noqa: E501

        self._date = date

    @property
    def may_lock(self):
        """Gets the may_lock of this AdminEditorRequestDTO.  # noqa: E501


        :return: The may_lock of this AdminEditorRequestDTO.  # noqa: E501
        :rtype: bool
        """
        return self._may_lock

    @may_lock.setter
    def may_lock(self, may_lock):
        """Sets the may_lock of this AdminEditorRequestDTO.


        :param may_lock: The may_lock of this AdminEditorRequestDTO.  # noqa: E501
        :type may_lock: bool
        """
        if self.local_vars_configuration.client_side_validation and may_lock is None:  # noqa: E501
            raise ValueError("Invalid value for `may_lock`, must not be `None`")  # noqa: E501

        self._may_lock = may_lock

    @property
    def may_read(self):
        """Gets the may_read of this AdminEditorRequestDTO.  # noqa: E501


        :return: The may_read of this AdminEditorRequestDTO.  # noqa: E501
        :rtype: bool
        """
        return self._may_read

    @may_read.setter
    def may_read(self, may_read):
        """Sets the may_read of this AdminEditorRequestDTO.


        :param may_read: The may_read of this AdminEditorRequestDTO.  # noqa: E501
        :type may_read: bool
        """
        if self.local_vars_configuration.client_side_validation and may_read is None:  # noqa: E501
            raise ValueError("Invalid value for `may_read`, must not be `None`")  # noqa: E501

        self._may_read = may_read

    @property
    def may_write(self):
        """Gets the may_write of this AdminEditorRequestDTO.  # noqa: E501


        :return: The may_write of this AdminEditorRequestDTO.  # noqa: E501
        :rtype: bool
        """
        return self._may_write

    @may_write.setter
    def may_write(self, may_write):
        """Sets the may_write of this AdminEditorRequestDTO.


        :param may_write: The may_write of this AdminEditorRequestDTO.  # noqa: E501
        :type may_write: bool
        """
        if self.local_vars_configuration.client_side_validation and may_write is None:  # noqa: E501
            raise ValueError("Invalid value for `may_write`, must not be `None`")  # noqa: E501

        self._may_write = may_write

    @property
    def is_admin(self):
        """Gets the is_admin of this AdminEditorRequestDTO.  # noqa: E501


        :return: The is_admin of this AdminEditorRequestDTO.  # noqa: E501
        :rtype: bool
        """
        return self._is_admin

    @is_admin.setter
    def is_admin(self, is_admin):
        """Sets the is_admin of this AdminEditorRequestDTO.


        :param is_admin: The is_admin of this AdminEditorRequestDTO.  # noqa: E501
        :type is_admin: bool
        """
        if self.local_vars_configuration.client_side_validation and is_admin is None:  # noqa: E501
            raise ValueError("Invalid value for `is_admin`, must not be `None`")  # noqa: E501

        self._is_admin = is_admin

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
        if not isinstance(other, AdminEditorRequestDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, AdminEditorRequestDTO):
            return True

        return self.to_dict() != other.to_dict()