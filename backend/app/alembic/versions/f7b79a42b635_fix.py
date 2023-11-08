"""fix

Revision ID: f7b79a42b635
Revises: 32558c75a3b4
Create Date: 2023-11-09 01:09:35.154688

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = 'f7b79a42b635'
down_revision: Union[str, None] = '32558c75a3b4'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('events', 'video_title',
               existing_type=sa.VARCHAR(),
               nullable=True)
    op.alter_column('events', 'rtsp_link',
               existing_type=sa.VARCHAR(),
               nullable=True)
    op.alter_column('events', 'rtsp_time',
               existing_type=postgresql.TIMESTAMP(),
               nullable=True)
    op.alter_column('events', 'video_time',
               existing_type=postgresql.TIME(),
               nullable=True)
    op.drop_constraint('events_task_id_fkey', 'events', type_='foreignkey')
    op.create_foreign_key(None, 'events', 'tasks', ['task_id'], ['id'])
    op.alter_column('tasks', 'video_titles',
               existing_type=postgresql.JSON(astext_type=sa.Text()),
               nullable=True)
    op.alter_column('tasks', 'rtsp_links',
               existing_type=postgresql.JSON(astext_type=sa.Text()),
               nullable=True)
    op.alter_column('tasks', 'end_time',
               existing_type=postgresql.TIMESTAMP(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('tasks', 'end_time',
               existing_type=postgresql.TIMESTAMP(),
               nullable=False)
    op.alter_column('tasks', 'rtsp_links',
               existing_type=postgresql.JSON(astext_type=sa.Text()),
               nullable=False)
    op.alter_column('tasks', 'video_titles',
               existing_type=postgresql.JSON(astext_type=sa.Text()),
               nullable=False)
    op.drop_constraint(None, 'events', type_='foreignkey')
    op.create_foreign_key('events_task_id_fkey', 'events', 'tasks', ['task_id'], ['id'], ondelete='CASCADE')
    op.alter_column('events', 'video_time',
               existing_type=postgresql.TIME(),
               nullable=False)
    op.alter_column('events', 'rtsp_time',
               existing_type=postgresql.TIMESTAMP(),
               nullable=False)
    op.alter_column('events', 'rtsp_link',
               existing_type=sa.VARCHAR(),
               nullable=False)
    op.alter_column('events', 'video_title',
               existing_type=sa.VARCHAR(),
               nullable=False)
    # ### end Alembic commands ###
