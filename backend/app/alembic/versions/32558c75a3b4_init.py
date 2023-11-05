"""init

Revision ID: 32558c75a3b4
Revises: 
Create Date: 2023-11-06 01:21:01.416695

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "32558c75a3b4"
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "tasks",
        sa.Column("name", sa.String(), nullable=False),
        sa.Column(
            "type",
            sa.Enum("VIDEO_DETECTION", "RTSP_DETECTION", name="tasktype"),
            nullable=False,
        ),
        sa.Column(
            "status",
            sa.Enum(
                "CREATED",
                "PROCESSING",
                "STOPPED",
                "ERROR",
                "COMPLETED",
                name="taskstatus",
            ),
            nullable=False,
        ),
        sa.Column("video_titles", sa.JSON(), nullable=False),
        sa.Column("rtsp_links", sa.JSON(), nullable=False),
        sa.Column("start_time", sa.DateTime(), nullable=False),
        sa.Column("end_time", sa.DateTime(), nullable=False),
        sa.Column("id", sa.Uuid(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("name"),
    )
    op.create_table(
        "events",
        sa.Column("event_path", sa.String(), nullable=False),
        sa.Column("video_title", sa.String(), nullable=False),
        sa.Column("rtsp_link", sa.String(), nullable=False),
        sa.Column("rtsp_time", sa.DateTime(), nullable=False),
        sa.Column("video_time", sa.Time(), nullable=False),
        sa.Column("task_id", sa.Uuid(), nullable=False),
        sa.Column("id", sa.Uuid(), nullable=False),
        sa.ForeignKeyConstraint(["task_id"], ["tasks.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table("events")
    op.drop_table("tasks")
    # ### end Alembic commands ###