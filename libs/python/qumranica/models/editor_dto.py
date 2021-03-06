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

from qumranica.configuration import Configuration


class EditorDTO(object):
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
        'email': 'str',
        'forename': 'str',
        'surname': 'str',
        'organization': 'str'
    }

    attribute_map = {
        'email': 'email',
        'forename': 'forename',
        'surname': 'surname',
        'organization': 'organization'
    }

    def __init__(self, email=None, forename=None, surname=None, organization=None, local_vars_configuration=None):  # noqa: E501
        """EditorDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._email = None
        self._forename = None
        self._surname = None
        self._organization = None
        self.discriminator = None

        self.email = email
        self.forename = forename
        self.surname = surname
        self.organization = organization

    @property
    def email(self):
        """Gets the email of this EditorDTO.  # noqa: E501


        :return: The email of this EditorDTO.  # noqa: E501
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email):
        """Sets the email of this EditorDTO.


        :param email: The email of this EditorDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and email is None:  # noqa: E501
            raise ValueError("Invalid value for `email`, must not be `None`")  # noqa: E501

        self._email = email

    @property
    def forename(self):
        """Gets the forename of this EditorDTO.  # noqa: E501


        :return: The forename of this EditorDTO.  # noqa: E501
        :rtype: str
        """
        return self._forename

    @forename.setter
    def forename(self, forename):
        """Sets the forename of this EditorDTO.


        :param forename: The forename of this EditorDTO.  # noqa: E501
        :type: str
        """

        self._forename = forename

    @property
    def surname(self):
        """Gets the surname of this EditorDTO.  # noqa: E501


        :return: The surname of this EditorDTO.  # noqa: E501
        :rtype: str
        """
        return self._surname

    @surname.setter
    def surname(self, surname):
        """Sets the surname of this EditorDTO.


        :param surname: The surname of this EditorDTO.  # noqa: E501
        :type: str
        """

        self._surname = surname

    @property
    def organization(self):
        """Gets the organization of this EditorDTO.  # noqa: E501


        :return: The organization of this EditorDTO.  # noqa: E501
        :rtype: str
        """
        return self._organization

    @organization.setter
    def organization(self, organization):
        """Sets the organization of this EditorDTO.


        :param organization: The organization of this EditorDTO.  # noqa: E501
        :type: str
        """

        self._organization = organization

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
        if not isinstance(other, EditorDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, EditorDTO):
            return True

        return self.to_dict() != other.to_dict()
